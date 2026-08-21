import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    FiChevronDown,
} from "react-icons/fi";
import Loading from "../Shared/Loading";

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);

    const { data: faqs, isLoading, isError } = useQuery({
        queryKey: ["faqs"],
        queryFn: async () => {
            const response = await fetch("/data/faq.json");

            if (!response.ok) {
                throw new Error("Failed to fetch FAQ data");
            }

            return response.json();
        },
    });

    // Toggle FAQ
    const handleToggle = (id) => {
        setActiveId((current) =>
            current === id ? null : id
        );
    };

    // Loading
    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return (
            <section>
                <div className="container min-h-[400px] flex items-center justify-center">
                    <p className="text-red-400">
                        Failed to load FAQ data.
                    </p>
                </div>
            </section>
        );
    }

    if (!faqs.length) {
        return null;
    }

    return (
        <section id="faq" className="py-24 overflow-hidden">
            <div className="container mx-auto px-5">

                {/*Section Header*/}

                <motion.div
                    className="max-w-4xl mx-auto text-center mb-14"
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
                        Frequently Asked Questions
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Answers to Your{" "}
                        <span className="gradient-text">
                            Questions
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Find answers to some of the most common questions
                        about our services, solutions, and development process.
                    </motion.p>
                </motion.div>

                {/*FAQ List*/}

                <div className="max-w-4xl mx-auto space-y-4">

                    {faqs.map((faq, index) => {
                        const isOpen =
                            activeId === faq._id;

                        return (
                            <div
                                key={faq._id}
                                className={`group rounded-2xl border overflow-hidden transition-all duration-300
                                    ${isOpen
                                        ? `border-cyan-400/40 bg-slate-900 shadow-lg shadow-cyan-500/5`
                                        : `border-slate-800 bg-slate-950/70 hover:border-cyan-400/30 hover:bg-slate-900/70`
                                    }
                                `}
                            >

                                {/*Question*/}

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleToggle(
                                            faq._id
                                        )
                                    }
                                    className="w-full flex items-center gap-4 text-left px-5 sm:px-7 py-5 cursor-pointer"
                                >

                                    {/* Number */}

                                    <span
                                        className={`shrink-0 text-xs font-mono transition-colors duration-300
                                            ${isOpen
                                                ? "text-cyan-400"
                                                : "text-slate-600"
                                            }
                                        `}
                                    >
                                        {String(
                                            index + 1
                                        ).padStart(2, "0")}
                                    </span>

                                    {/* Question */}

                                    <span
                                        className={`flex-1 text-sm sm:text-base font-medium transition-colors duration-300

                                            ${isOpen
                                                ? "text-cyan-400"
                                                : "text-slate-300 group-hover:text-slate-100"
                                            }
                                        `}
                                    >
                                        {faq.question}
                                    </span>

                                    {/* Icon */}

                                    <span
                                        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300

                                            ${isOpen
                                                ? `rotate-180 border-cyan-400/30 bg-cyan-400/10 text-cyan-400`
                                                : `border-slate-800 text-slate-500 group-hover:border-cyan-400/30 group-hover:text-cyan-400`
                                            }
                                        `}
                                    >
                                        <FiChevronDown className="w-4 h-4" />
                                    </span>

                                </button>

                                {/*Answer*/}

                                <div
                                    className={`grid transition-all duration-300 ease-in-out
                                        ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }
                                    `}
                                >

                                    <div className="overflow-hidden">

                                        <div className="px-5 sm:px-7 pb-6 pl-14 sm:pl-[4.5rem]">
                                            <p className="text-sm leading-7 text-slate-400 max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FAQ;