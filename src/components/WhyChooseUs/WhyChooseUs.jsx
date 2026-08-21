import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Loading from "../Shared/Loading";
import { useQuery } from "@tanstack/react-query";


const slogans = [
    {
        first: "Built for Your",
        second: "Next Move.",
    },
    {
        first: "Ready for",
        second: "Your Growth.",
    },
    {
        first: "Better Tech?",
        second: "Univurse Tech",
    },
];

const WhyChooseUs = () => {
    const [activeSlogan, setActiveSlogan] = useState(0);

    useEffect(() => {
        const sloganTimer = window.setInterval(() => {
            setActiveSlogan((current) => (current + 1) % slogans.length);
        }, 2600);

        return () => window.clearInterval(sloganTimer);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const { data: reasons, isLoading, isError } = useQuery({
        queryKey: ["whyChooseUs"],
        queryFn: async () => {
            const response = await fetch("/data/whyChooseUs.json");

            if (!response.ok) {
                throw new Error("Failed to fetch Why Choose Us data");
            }

            return response.json();
        },
    });

    // Previous
    const handlePrevious = () => {
        setActiveIndex((current) => current - 1);
    };

    // Next
    const handleNext = () => {
        setActiveIndex((current) => current + 1);
    };

    const handleSwipe = (offsetX) => {
        const swipeThreshold = 50;

        if (offsetX < -swipeThreshold) {
            // Swipe left → next
            handleNext();
        }

        if (offsetX > swipeThreshold) {
            // Swipe right → previous
            handlePrevious();
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return (
            <section>
                <div className="container min-h-[400px] flex items-center justify-center">
                    <p className="text-red-400">
                        Failed to load Why Choose Us data.
                    </p>
                </div>
            </section>
        );
    }

    if (!reasons.length) {
        return null;
    }

    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="container mx-auto px-5">

                {/* Section Header */}
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-16"
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
                        Why Choose Us
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
                        className="mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        We combine business understanding, modern technology,
                        and thoughtful solutions to help businesses build,
                        grow, and move forward with confidence.
                    </motion.p>
                </motion.div>

                {/* Slider */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Previous reason"
                        className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Cards */}
                    <motion.div
                        className="relative h-[370px] flex items-center justify-center touch-pan-y"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={(event, info) => {
                            handleSwipe(info.offset.x);
                        }}
                    >

                        {reasons.map((reason, index) => {
                            const total = reasons.length;

                            let position = index - (activeIndex % total);

                            if (position > total / 2) {
                                position -= total;
                            }

                            if (position < -total / 2) {
                                position += total;
                            }

                            const isActive = position === 0;
                            const isVisible = Math.abs(position) <= 2;

                            if (!isVisible) {
                                return null;
                            }

                            return (
                                <div
                                    key={reason._id}
                                    className={`group absolute w-[280px] min-h-[330px] rounded-2xl border p-7 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20

                                        ${isActive
                                            ?
                                            `bg-slate-950 border-cyan-400/50 scale-105 opacity-100 shadow-2xl shadow-cyan-500/10`
                                            :
                                            ` bg-slate-900/40 border-slate-800 scale-90 opacity-40`
                                        }
                                    `}
                                    style={{
                                        transform: `
                                            translateX(${position * 300}px)
                                            scale(${isActive ? 1.05 : 0.9})
                                        `,
                                        zIndex: isActive ? 10 : 5,
                                    }}
                                >
                                    {/* Number */}
                                    <span
                                        className={`text-4xl font-light tracking-tight
                                            ${isActive
                                                ? "text-cyan-400"
                                                : "text-slate-600"
                                            }
                                        `}
                                    >
                                        {String(index + 1).padStart(3, "0")}
                                    </span>

                                    {/* Title */}
                                    <h3
                                        className={`mt-8 text-xl leading-7
                                            ${isActive
                                                ? "text-cyan-400"
                                                : "text-slate-300"
                                            }
                                        `}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`mt-5 text-sm leading-6
                                            ${isActive
                                                ? "text-slate-300"
                                                : "text-slate-500"
                                            }
                                        `}
                                    >
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next reason"
                        className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;