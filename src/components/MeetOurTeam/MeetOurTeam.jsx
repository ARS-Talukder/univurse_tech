
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiGlobe } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";

// Team images
import abdurRahim from "../../assets/team/optimized/Abdur_Rahim.jpg";
import mdAbdurRahman from "../../assets/team/optimized/MD_Abdur_Rahman.jpg";
import asifIftekharFahim from "../../assets/team/optimized/Asif_Iftekher_Fahim.jpg";
import mdZaedHassanShams from "../../assets/team/optimized/Md_Zaed_Hassan_Shams.jpg";
import nirjoyDebnath from "../../assets/team/optimized/Nirjoy_Debnath.jpg";
import mafujAhammad from "../../assets/team/optimized/Mafuj_Ahammad.jpg";
import aurunaveMollikRuddra from "../../assets/team/optimized/Aurunave_Mollik_Ruddra.jpg";
import azizurRahman from "../../assets/team/optimized/Azizur_Rahman.jpg";
import mdRiazUddin from "../../assets/team/optimized/Md_Riaz_Uddin.jpg";

// Image Map
const imageMap = {
    abdur_rahim: abdurRahim,
    md_abdur_rahman: mdAbdurRahman,
    asif_iftekhar_fahim: asifIftekharFahim,
    md_zaed_hassan_shams: mdZaedHassanShams,
    nirjoy_debnath: nirjoyDebnath,
    mafuj_ahammad: mafujAhammad,
    aurunave_mollik_ruddra: aurunaveMollikRuddra,
    azizur_rahman: azizurRahman,
    md_riaz_uddin: mdRiazUddin,
};

const MeetOurTeam = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { data: team, isLoading, isError } = useQuery({
        queryKey: ["team"],
        queryFn: async () => {
            const response = await fetch("/data/team.json");

            if (!response.ok) {
                throw new Error("Failed to fetch team data");
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

    // Swipe
    const handleSwipe = (offsetX) => {
        const swipeThreshold = 50;

        if (offsetX < -swipeThreshold) {
            handleNext();
        } else if (offsetX > swipeThreshold) {
            handlePrevious();
        }
    };

    // Loading
    if (isLoading) {
        return <Loading />;
    }

    // Error
    if (isError) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-5 min-h-[200px] flex items-center justify-center">
                    <p className="text-red-400">
                        Failed to load team data.
                    </p>
                </div>
            </section>
        );
    }

    if (!team?.length) {
        return null;
    }

    return (
        <section
            id="team"
            className="py-14 sm:py-16 bg-slate-900/40 overflow-hidden"
        >
            <div className="container mx-auto px-0">

                {/* Section Header */}
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        Meet Our Team
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        The People Behind{" "}
                        <span className="gradient-text">
                            Univurse Tech
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mt-3 sm:mt-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Meet the people who bring together
                        technology, creativity, and business
                        thinking to build meaningful digital
                        solutions.
                    </motion.p>
                </motion.div>

                {/* Team Slider */}
                <div className="relative w-full mx-auto">

                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Previous team member"
                        className="absolute left-0 sm:left-2 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Cards */}
                    <motion.div
                        className="relative h-[300px] sm:h-[340px] flex items-center justify-center touch-pan-y"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={(event, info) => {
                            handleSwipe(info.offset.x);
                        }}
                    >
                        {team.map((member, index) => {
                            const total = team.length;

                            let position =
                                index - (activeIndex % total);

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
                                    key={member._id}
                                    className={`group absolute w-[210px] sm:w-[240px] rounded-xl border overflow-hidden transition-all duration-700 ease-in-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/20
                                        ${isActive
                                            ? "bg-slate-950 border-cyan-400/50 opacity-100 shadow-xl shadow-cyan-500/10"
                                            : "bg-slate-900/40 border-slate-800 opacity-40"
                                        }
                                    `}
                                    style={{
                                        transform: `translateX(${position * 230}px) scale(${isActive ? 1.03 : 0.88})`,
                                        zIndex: isActive ? 10 : 5,
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative h-[200px] sm:h-[235px] overflow-hidden">
                                        <img
                                            src={imageMap[member.image]}
                                            alt={member.name}
                                            loading="lazy"
                                            decoding="async"
                                            width="600"
                                            height="720"
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                                        {/* Social Links */}
                                        <div className="absolute left-3 bottom-5 flex items-center gap-2">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${member.name} LinkedIn`}
                                                    className="flex items-center justify-center"
                                                >
                                                    <FaLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-400 transition-colors duration-300" />
                                                </a>
                                            )}

                                            {member.portfolio && (
                                                <a
                                                    href={member.portfolio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${member.name} Portfolio`}
                                                    className="flex items-center justify-center"
                                                >
                                                    <FiGlobe className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors duration-300" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Name and Designation */}
                                    <div className="relative z-10 -mt-3 mx-1 mb-2 rounded-lg border border-cyan-400/30 bg-slate-950 px-1 py-1.5 text-center shadow-lg shadow-black/30">
                                        <p
                                            className={`text-sm lg:text-base font-bold transition-colors duration-300 ${isActive
                                                    ? "text-cyan-400"
                                                    : "text-slate-300"
                                                }`}
                                        >
                                            {member.name}
                                        </p>

                                        <p className="mt-0.5 text-[12px] lg:text-[14px] font-bold text-slate-400">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next team member"
                        className="absolute right-0 sm:right-2 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
