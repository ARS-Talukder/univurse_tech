import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WhyChooseUs = () => {
    const [reasons, setReasons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    // Fetch reasons
    useEffect(() => {
        const fetchReasons = async () => {
            try {
                const response = await fetch("/data/whyChooseUs.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch Why Choose Us data");
                }

                const data = await response.json();

                setReasons(data);
            } catch (error) {
                console.error("Why Choose Us:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReasons();
    }, []);

    // Previous
    const handlePrevious = () => {
        setActiveIndex((current) => current - 1);
    };

    // Next
    const handleNext = () => {
        setActiveIndex((current) => current + 1);
    };

    if (loading) {
        return (
            <section className="py-24">
                <div className="container mx-auto px-5 text-center">
                    <div className="flex justify-center items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                        <span
                            className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                        />
                        <span
                            className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                        />
                    </div>
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
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="section-subtitle">
                        Why Choose Us
                    </span>

                    <h2>
                        Built for Your{" "}
                        <span className="gradient-text">
                            Next Move
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto">
                        We combine business understanding, modern technology,
                        and thoughtful solutions to help businesses build,
                        grow, and move forward with confidence.
                    </p>
                </div>

                {/* Slider */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Previous reason"
                        className="
                            absolute
                            left-0
                            lg:-left-4
                            top-1/2
                            -translate-y-1/2
                            z-20
                            w-11
                            h-11
                            flex
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-800
                            bg-slate-950
                            text-slate-400
                            hover:text-cyan-400
                            hover:border-cyan-400/40
                            hover:bg-slate-900
                            transition-all
                            duration-300
                        "
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Cards */}
                    <div className="relative h-[370px] flex items-center justify-center">

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
                                    className={`
                                        group
                                        absolute
                                        w-[280px]
                                        min-h-[330px]
                                        rounded-2xl
                                        border
                                        p-7

                                        transition-all
                                        duration-700
                                        ease-in-out

                                         hover:-translate-y-2
    hover:border-cyan-400/40
    hover:shadow-xl
    hover:shadow-cyan-500/20

                                        ${isActive
                                            ? `
                                                    bg-slate-950
                                                    border-cyan-400/50
                                                    scale-105
                                                    opacity-100
                                                    shadow-2xl
                                                    shadow-cyan-500/10
                                                `
                                            : `
                                                    bg-slate-900/40
                                                    border-slate-800
                                                    scale-90
                                                    opacity-40
                                                `
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
                                        className={`
                                            text-4xl
        font-light
        tracking-tight
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
                                        className={`
                                            mt-8
                                            text-xl
                                            leading-7
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
                                        className={`
                                            mt-5
                                            text-sm
                                            leading-6
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
                    </div>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next reason"
                        className="
                            absolute
                            right-0
                            lg:-right-4
                            top-1/2
                            -translate-y-1/2
                            z-20
                            w-11
                            h-11
                            flex
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-800
                            bg-slate-950
                            text-slate-400
                            hover:text-cyan-400
                            hover:border-cyan-400/40
                            hover:bg-slate-900
                            transition-all
                            duration-300
                        "
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>

                </div>

                {/* Mobile */}
                <div className="md:hidden mt-8">
                    <div className="flex items-center justify-center gap-4">

                        <button
                            type="button"
                            onClick={handlePrevious}
                            aria-label="Previous reason"
                            className="
                                w-10
                                h-10
                                flex
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-800
                                bg-slate-950
                                text-slate-400
                                hover:text-cyan-400
                                hover:border-cyan-400/40
                                transition-all
                            "
                        >
                            <FiChevronLeft />
                        </button>

                        <span className="text-xs font-mono text-slate-600">
                            {String(activeIndex + 1).padStart(2, "0")}
                            {" / "}
                            {String(reasons.length).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next reason"
                            className="
                                w-10
                                h-10
                                flex
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-800
                                bg-slate-950
                                text-slate-400
                                hover:text-cyan-400
                                hover:border-cyan-400/40
                                transition-all
                            "
                        >
                            <FiChevronRight />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;