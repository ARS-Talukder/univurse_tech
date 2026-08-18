import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

// Team images
import abdurRahim from "../../assets/team/Abdur_Rahim.png";
import mdAbdurRahman from "../../assets/team/MD_Abdur_Rahman.jpeg";
import mdZaedHassanShams from "../../assets/team/Md_Zaed_Hassan_Shams.png";
import nirjoyDebnath from "../../assets/team/Nirjoy_Debnath.png";
import mafujAhammad from "../../assets/team/Mafuj_Ahammad.png";
import aurunaveMollikRuddra from "../../assets/team/Aurunave_Mollik_Ruddra.png";
import azizurRahman from "../../assets/team/Azizur_Rahman.png";
import mdRiazUddin from "../../assets/team/Md_Riaz_Uddin.png";


// Image Map
const imageMap = {
    abdur_rahim: abdurRahim,
    md_abdur_rahman: mdAbdurRahman,
    md_zaed_hassan_shams: mdZaedHassanShams,
    nirjoy_debnath: nirjoyDebnath,
    mafuj_ahammad: mafujAhammad,
    aurunave_mollik_ruddra: aurunaveMollikRuddra,
    azizur_rahman: azizurRahman,
    md_riaz_uddin: mdRiazUddin,
};


const MeetOurTeam = () => {

    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeIndex, setActiveIndex] = useState(0);


    // Fetch team data
    useEffect(() => {

        const fetchTeam = async () => {

            try {

                const response = await fetch(
                    "/data/team.json"
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch team data"
                    );
                }

                const data = await response.json();

                setTeam(data);

            } catch (error) {

                console.error(
                    "Meet Our Team:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchTeam();

    }, []);


    // Previous
    const handlePrevious = () => {

        setActiveIndex(
            (current) => current - 1
        );

    };


    // Next
    const handleNext = () => {

        setActiveIndex(
            (current) => current + 1
        );

    };


    // Loading
    if (loading) {

        return (

            <section className="py-24">

                <div className="container mx-auto px-5 text-center">

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


    if (!team.length) {
        return null;
    }


    return (

        <section id="team" className="py-24 bg-slate-900/40 overflow-hidden">

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
                        Meet Our Team
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        The People Behind{" "}
                        <span className="gradient-text">
                            Univurse Tech
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Meet the people who bring together
                        technology, creativity, and business
                        thinking to build meaningful digital
                        solutions.
                    </motion.p>
                </motion.div>

                {/* Slider */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={handlePrevious}
                        aria-label="Previous team member"
                        className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >

                        <FiChevronLeft className="w-5 h-5" />

                    </button>

                    {/* Cards */}
                    <div className="relative h-[430px] flex items-center justify-center">

                        {team.map((member, index) => {

                            const total = team.length;


                            /*
                            Same position calculation
                            used in WhyChooseUs
                            */

                            let position =
                                index -
                                (activeIndex % total);


                            if (position > total / 2) {

                                position -= total;

                            }


                            if (position < -total / 2) {

                                position += total;

                            }


                            const isActive =
                                position === 0;


                            const isVisible =
                                Math.abs(position) <= 2;


                            if (!isVisible) {
                                return null;
                            }


                            return (

                                <div
                                    key={member._id}

                                    className={`group absolute w-[280px] sm:w-[300px] rounded-2xl border overflow-hidden transition-all duration-700 ease-in-out hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-500/30 

                                        ${isActive
                                            ? `
                                                    bg-slate-950 border-cyan-400/50 scale-105 opacity-100 shadow-2xl shadow-cyan-500/10
                                                `
                                            : `
                                                    bg-slate-900/40 border-slate-800 scale-90 opacity-40
                                                `
                                        }
                                    `}

                                    style={{
                                        transform: `
                                            translateX(
                                                ${position * 300}px
                                            )

                                            scale(
                                                ${isActive
                                                ? 1.05
                                                : 0.9
                                            }
                                            )
                                        `,

                                        zIndex:
                                            isActive
                                                ? 10
                                                : 5,
                                    }}
                                >

                                    {/* Image */}

                                    <div className="group relative h-[330px] overflow-hidden">

                                        <img
                                            src={
                                                imageMap[
                                                member.image
                                                ]
                                            }

                                            alt={
                                                member.name
                                            }

                                            className="w-full h-full object-cover transition-transform duration-700"
                                        />


                                        {/* Gradient */}

                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"
                                        />


                                        {/* LinkedIn */}

                                        {member.linkedin && (

                                            <a
                                                href={
                                                    member.linkedin
                                                }

                                                target="_blank"

                                                rel="noopener noreferrer"

                                                aria-label={`${member.name} LinkedIn`}

                                                className="absolute left-4 bottom-8 flex items-center justify-center text-slate-950 translate-y-0 bg-slate-200 hover:bg-slate-400 transition-all duration-300"
                                            >

                                                <FaLinkedin className="w-8 h-8 text-blue-600" />

                                            </a>

                                        )}

                                    </div>


                                    {/*Name*/}

                                    <div className="relative z-10 -mt-7 mx-5 rounded-xl border border-cyan-400/30 bg-slate-950 px-4 py-3 text-center shadow-xl shadow-black/30">

                                        <h5
                                            className={`text-base sm:text-lg font-semibold transition-colors duration-300
                                                ${isActive
                                                    ? "text-cyan-400"
                                                    : "text-slate-300"
                                                }
                                            `}
                                        >

                                            {member.name}

                                        </h5>


                                        <p className="mt-1 text-xs sm:text-sm font-bold text-slate-500">
                                            {member.designation}
                                        </p>

                                    </div>


                                </div>

                            );

                        })}

                    </div>


                    {/*Right Arrow*/}

                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next team member"
                        className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all duration-300"
                    >

                        <FiChevronRight className="w-5 h-5" />

                    </button>


                </div>


                {/*Mobile Controls*/}

                <div className="md:hidden mt-8">

                    <div className="flex items-center justify-cen ">

                        <button
                            type="button"
                            onClick={handlePrevious}
                            aria-label="Previous team member"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                        >

                            <FiChevronLeft />

                        </button>


                        <span className="text-xs font-mono text-slate-600">

                            {String(
                                (activeIndex % team.length) + 1
                            ).padStart(2, "0")}

                            {" / "}

                            {String(
                                team.length
                            ).padStart(2, "0")}

                        </span>


                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next team member"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                        >

                            <FiChevronRight />

                        </button>

                    </div>

                </div>


            </div>

        </section>

    );

};


export default MeetOurTeam;