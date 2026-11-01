
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBookOpen,
    FiHeart,
    FiHome,
    FiGlobe,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const iconMap = {
    book: FiBookOpen,
    heart: FiHeart,
    home: FiHome,
    globe: FiGlobe,
};

const colorClasses = {
    cyan: {
        icon: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        accent: "text-cyan-400",
        hover: "group-hover:text-cyan-400",
        border: "group-hover:border-cyan-500/40",
        glow: "group-hover:shadow-cyan-950/30",
    },
    indigo: {
        icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        accent: "text-indigo-400",
        hover: "group-hover:text-indigo-400",
        border: "group-hover:border-indigo-500/40",
        glow: "group-hover:shadow-indigo-950/30",
    },
    violet: {
        icon: "bg-violet-500/10 text-violet-400 border-violet-500/20",
        accent: "text-violet-400",
        hover: "group-hover:text-violet-400",
        border: "group-hover:border-violet-500/40",
        glow: "group-hover:shadow-violet-950/30",
    },
};

const slogans = [
    {
        first: "Software Solutions That Move",
        second: "Business Forward.",
    },
    {
        first: "Digital Products That Drive",
        second: "Real Growth.",
    },
    {
        first: "Technology That Solves",
        second: "Business Challenges.",
    },
];

const categorySlugMap = {
    "1": "digital-commerce-edtech",
    "2": "health-operations-logistics",
    "3": "facility-lifestyle-automation",
    "4": "brand-portfolio-experiences",
};

const Products = () => {
    const [activeSlogan, setActiveSlogan] = useState(0);

    useEffect(() => {
        const sloganTimer = window.setInterval(() => {
            setActiveSlogan((current) => (current + 1) % slogans.length);
        }, 2600);

        return () => window.clearInterval(sloganTimer);
    }, []);

    const {
        data: productsData = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("/data/products.json");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return (
            <section id="products" className="bg-slate-950">
                <div className="container flex min-h-[400px] items-center justify-center">
                    <p className="text-red-400">
                        Failed to load our product categories.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="products" className="bg-slate-950 py-20">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="mx-auto mb-14 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-subtitle">
                        Our Products &amp; Solutions
                    </span>

                    <motion.h2
                        key={activeSlogan}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        {slogans[activeSlogan].first}{" "}
                        <span className="gradient-text">
                            {slogans[activeSlogan].second}
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mx-auto mt-6 max-w-2xl text-slate-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Explore our software solutions by category. Choose a
                        category to discover products, features, and available
                        live demos.
                    </motion.p>
                </motion.div>

                {/* Four Category Cards */}
                <div className="grid gap-6 sm:grid-cols-4">
                    {productsData.map((category, index) => {
                        const Icon = iconMap[category.icon] || FiGlobe;
                        const colors =
                            colorClasses[category.color] || colorClasses.cyan;

                        const slug = categorySlugMap[category._id];

                        if (!slug) {
                            return null;
                        }

                        return (
                            <motion.div
                                key={category._id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    to={`/product-categories/${slug}`}
                                    aria-label={`Explore ${category.group}`}
                                    className={`group flex h-full min-h-[230px] flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:shadow-xl ${colors.border} ${colors.glow}`}
                                >
                                    <div>
                                        <div className="mb-3 flex items-start justify-between gap-4">
                                            <div
                                                className={`rounded-xl border p-3 ${colors.icon}`}
                                            >
                                                <Icon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </div>


                                        </div>

                                        <h4
                                            className={`text-xl font-semibold text-white transition-colors sm:text-2xl ${colors.hover}`}
                                        >
                                            {category.group}
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            {category.groupDescription}
                                        </p>
                                    </div>

                                    <div className="flex items-end justify-between mt-7">
                                        <span className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-xs text-slate-400">
                                            {category.items.length}{" "}
                                            {category.items.length === 1
                                                ? "product"
                                                : "products"}
                                        </span>

                                        <div
                                            className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.accent}`}
                                        >
                                            Explore
                                            <FiArrowRight
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Products;
