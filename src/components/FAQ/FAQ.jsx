import { useEffect, useState } from "react";
import {
    FiChevronDown,
} from "react-icons/fi";

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeId, setActiveId] = useState(null);

    // =========================
    // Fetch FAQs
    // =========================

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await fetch("/data/faq.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch FAQ data");
                }

                const data = await response.json();

                setFaqs(data);
            } catch (error) {
                console.error("FAQ:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    // =========================
    // Toggle FAQ
    // =========================

    const handleToggle = (id) => {
        setActiveId((current) =>
            current === id ? null : id
        );
    };

    // =========================
    // Loading
    // =========================

    if (loading) {
        return (
            <section className="py-24">
                <div className="container mx-auto px-5">
                    <div className="flex justify-center items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />

                        <span
                            className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                            style={{
                                animationDelay: "150ms",
                            }}
                        />

                        <span
                            className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                            style={{
                                animationDelay: "300ms",
                            }}
                        />
                    </div>
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

                {/* =========================
                    Section Header
                ========================= */}

                <div className="max-w-3xl mx-auto text-center mb-14">

                    <span className="section-subtitle">
                        Frequently Asked Questions
                    </span>

                    <h2>
                        Answers to Your{" "}
                        <span className="gradient-text">
                            Questions
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto">
                        Find answers to some of the most
                        common questions about our services,
                        solutions, and development process.
                    </p>

                </div>

                {/* =========================
                    FAQ List
                ========================= */}

                <div className="max-w-4xl mx-auto space-y-4">

                    {faqs.map((faq, index) => {
                        const isOpen =
                            activeId === faq._id;

                        return (
                            <div
                                key={faq._id}
                                className={`
                                    group

                                    rounded-2xl

                                    border

                                    overflow-hidden

                                    transition-all
                                    duration-300

                                    ${isOpen
                                        ? `
                                                border-cyan-400/40
                                                bg-slate-900
                                                shadow-lg
                                                shadow-cyan-500/5
                                            `
                                        : `
                                                border-slate-800
                                                bg-slate-950/70
                                                hover:border-cyan-400/30
                                                hover:bg-slate-900/70
                                            `
                                    }
                                `}
                            >

                                {/* =========================
                                    Question
                                ========================= */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleToggle(
                                            faq._id
                                        )
                                    }
                                    className="
                                        w-full

                                        flex
                                        items-center
                                        gap-4

                                        text-left

                                        px-5
                                        sm:px-7
                                        py-5

                                        cursor-pointer
                                    "
                                >

                                    {/* Number */}

                                    <span
                                        className={`
                                            shrink-0

                                            text-xs
                                            font-mono

                                            transition-colors
                                            duration-300

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
                                        className={`
                                            flex-1

                                            text-sm
                                            sm:text-base

                                            font-medium

                                            transition-colors
                                            duration-300

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
                                        className={`
                                            shrink-0

                                            w-8
                                            h-8

                                            flex
                                            items-center
                                            justify-center

                                            rounded-full

                                            border

                                            transition-all
                                            duration-300

                                            ${isOpen
                                                ? `
                                                        rotate-180
                                                        border-cyan-400/30
                                                        bg-cyan-400/10
                                                        text-cyan-400
                                                    `
                                                : `
                                                        border-slate-800
                                                        text-slate-500
                                                        group-hover:border-cyan-400/30
                                                        group-hover:text-cyan-400
                                                    `
                                            }
                                        `}
                                    >
                                        <FiChevronDown className="w-4 h-4" />
                                    </span>

                                </button>

                                {/* =========================
                                    Answer
                                ========================= */}

                                <div
                                    className={`
                                        grid

                                        transition-all
                                        duration-300
                                        ease-in-out

                                        ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                        }
                                    `}
                                >

                                    <div className="overflow-hidden">

                                        <div className="
                                            px-5
                                            sm:px-7
                                            pb-6

                                            pl-14
                                            sm:pl-[4.5rem]
                                        ">
                                            <p className="
                                                text-sm
                                                leading-7

                                                text-slate-400

                                                max-w-3xl
                                            ">
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