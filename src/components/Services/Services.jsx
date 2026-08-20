import { motion } from "framer-motion";
import { FiArrowDownRight, FiGlobe, FiSmartphone, FiBriefcase, FiTrendingUp } from "react-icons/fi";
import { CgIfDesign } from "react-icons/cg";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import { useEffect, useState } from "react";

const iconMap = {
    web: FiGlobe,
    mobile: FiSmartphone,
    enterprise: FiBriefcase,
    marketing: FiTrendingUp,
    ux: CgIfDesign,
};

const slogans = [
    {
        first: "We build,",
        second: "Grow & Scale.",
    },
    {
        first: "We Design",
        second: "& Launch.",
    },
    {
        first: "We Innovate",
        second: "& Automate.",
    },
    {
        first: "We Modernize",
        second: "& Transform.",
    },
];

const Services = () => {
    const [activeSlogan, setActiveSlogan] = useState(0);

    useEffect(() => {
        const sloganTimer = window.setInterval(() => {
            setActiveSlogan((current) => (current + 1) % slogans.length);
        }, 2600);

        return () => window.clearInterval(sloganTimer);
    }, []);

    const { data: services, isLoading, isError, } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const response = await fetch("/data/services.json");

            if (!response.ok) {
                throw new Error("Failed to fetch services");
            }

            return response.json();
        },
    });

    /* Loading */
    if (isLoading) {
        return <Loading />;
    }

    /* Error */
    if (isError) {
        return (
            <section id="services">
                <div className="container min-h-[400px] flex items-center justify-center">
                    <p className="text-red-400">
                        Unable to load our services.
                    </p>
                </div>
            </section>
        );
    }
    return (
        <section
            id="services"
            className="bg-slate-900/40 border-y border-slate-800/60"
        >
            <div className="container">

                {/* Section Header */}
                <motion.div
                    className="max-w-4xl mb-16 mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Core Services
                    </motion.span>

                    <motion.h2
                        key={activeSlogan}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                    >
                        {slogans[activeSlogan].first}{" "}

                        <motion.span
                            key={activeSlogan}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            className="inline-block gradient-text"
                        >
                            {slogans[activeSlogan].second}
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 max-w-2xl text-center mx-auto"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        From websites and mobile applications to enterprise
                        software and digital marketing, we provide the technology
                        and expertise businesses need to grow online.
                    </motion.p>
                </motion.div>

                {/* Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon];

                        return (
                            <div
                                key={service._id}
                                className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Number */}
                                <span className="absolute top-5 right-5 text-xs font-mono text-slate-700">
                                    0{index + 1}
                                </span>

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-6 text-slate-400">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="mt-6 space-y-2.5">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-xs text-slate-300"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom */}
                                <div className="mt-auto pt-7">
                                    <a
                                        href="/#contact"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                                    >
                                        Discuss Service
                                        <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
