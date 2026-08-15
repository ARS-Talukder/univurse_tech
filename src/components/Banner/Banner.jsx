import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden border-b border-slate-800/60 pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-cyan-500/20 to-blue-600/10 blur-[140px] pointer-events-none" />

            <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-50 pointer-events-none bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="container relative z-10 mt-8">
                <div className="max-w-5xl">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
    relative
    inline-flex items-center gap-3
    px-5 py-2.5
    rounded-full
    border border-cyan-400/40
    bg-cyan-400/10
    text-cyan-300
    text-xs font-mono font-semibold
    tracking-wide uppercase
    mb-8
    overflow-hidden
  "
                    >
                        {/* Blinking Glow */}
                        <span className="absolute inset-0 rounded-full bg-cyan-400/10 animate-pulse" />

                        {/* Glowing Dot */}
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-100 opacity-300 animate-ping" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                        </span>

                        {/* Text */}
                        <span className="relative z-10">
                            ⚡ ENTERPRISE SOFTWARE & SOLUTION ARCHITECTURE
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl"
                    >
                        Software platforms engineered to solve{" "}
                        <span className="gradient-text">
                            real operational bottlenecks.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="max-w-3xl mt-8 text-lg md:text-xl text-slate-300 leading-relaxed"
                    >
                        From automated facility and health logistics to high-scale EdTech
                        and E-Commerce—Univurse Tech delivers battle-tested, modular
                        software systems that drive measurable long-term business growth.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10"
                    >
                        <a
                            href="#products"
                            className="primary-btn inline-flex items-center justify-center gap-2"
                        >
                            Explore Our Solutions
                            <FiArrowRight />
                        </a>

                        <a
                            href="#contact"
                            className="secondary-btn inline-flex items-center justify-center"
                        >
                            Book an Engineering Call
                        </a>
                    </motion.div>

                    {/* Trust Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-8"
                    >
                        {/* Metric 1 */}
                        <div>
                            <span className="block text-3xl font-extrabold text-white font-mono">
                                7+
                            </span>

                            <span className="block text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                                Enterprise-Ready Core Engines
                            </span>
                        </div>

                        {/* Metric 2 */}
                        <div>
                            <span className="block text-3xl font-extrabold text-cyan-400 font-mono">
                                Multi-Stack
                            </span>

                            <span className="block text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                                MERN · ASP.NET Core · Android
                            </span>
                        </div>

                        {/* Metric 3 */}
                        <div>
                            <span className="block text-3xl font-extrabold text-indigo-400 font-mono">
                                99.99%
                            </span>

                            <span className="block text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                                Architecture Uptime & Security
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Banner;