import { useEffect, useState } from "react";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { FaReact, FaLaravel, FaPython, FaSketch } from "react-icons/fa";
import { SiFirebase, SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandKotlin, TbBrandAdobeXd } from "react-icons/tb";
import { DiDjango, DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi"; import { TbBrandCSharp, TbBrandNextjs } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiFastapi } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io";
import { SiTypescript, SiFlutter } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { PiFileSqlDuotone, PiFigmaLogoFill } from "react-icons/pi";

const categories = [
    "Frontend",
    "Backend",
    "Mobile",
    "Databases",
    "UI/UX",
];

const iconMap = {
    // Backend
    node: DiNodejs,
    laravel: FaLaravel,
    python: FaPython,
    django: DiDjango,
    csharp: TbBrandCSharp,
    dotnet: AiOutlineDotNet,
    ai: GiArtificialIntelligence,
    fastapi: SiFastapi,

    // Frontend
    javascript: TbBrandJavascript,
    react: FaReact,
    nextjs: TbBrandNextjs,
    angular: IoLogoAngular,
    typescript: SiTypescript,

    // Mobile
    flutter: SiFlutter,
    reactnative: FaReact,
    kotlin: TbBrandKotlin,

    // Databases
    mysql: SiMysql,
    mongodb: DiMongodb,
    postgresql: BiLogoPostgresql,
    firebase: SiFirebase,
    oracle: GrOracle,
    mssql: PiFileSqlDuotone,
    redis: DiRedis,

    // UI/UX
    figma: PiFigmaLogoFill,
    sketch: FaSketch,
    adobexd: TbBrandAdobeXd,
};

const Technology = () => {
    const [technologies, setTechnologies] = useState({});
    const [activeCategory, setActiveCategory] = useState("Backend");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                setLoading(true);

                const response = await fetch("/data/technologies.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch technologies");
                }

                const data = await response.json();

                setTechnologies(data);
            } catch (error) {
                console.error("Technology fetch error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchTechnologies();
    }, []);

    if (loading) {
        return (
            <section id="technology">
                <div className="container min-h-[400px] flex items-center justify-center">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />

                        <span
                            className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: "0.15s" }}
                        />

                        <span
                            className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce"
                            style={{ animationDelay: "0.3s" }}
                        />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="technology">
                <div className="container min-h-[400px] flex items-center justify-center">
                    <p className="text-red-400">
                        Unable to load technologies.
                    </p>
                </div>
            </section>
        );
    }

    const activeTechnologies = technologies[activeCategory] || [];

    return (
        <section
            id="tech"
            className="bg-slate-900/40 border-y border-slate-800/60"
        >
            <div className="container">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <span className="section-subtitle">
                        Technologies
                    </span>

                    <h2>
                        Technologies We{" "}
                        <span className="gradient-text">
                            Work With
                        </span>
                    </h2>

                    <p className="mt-5">
                        We use modern and reliable technologies to build
                        scalable digital products and business solutions.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-14">
                    <div className="flex flex-wrap justify-center border border-slate-700 rounded-xl overflow-hidden bg-slate-900/60">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 border-r last:border-r-0 border-slate-700
                  ${activeCategory === category
                                        ? "bg-cyan-400 text-slate-950"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                </div>

                {/* Technology Cards */}
                <div
                    key={activeCategory}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {activeTechnologies.map((technology) => {
                        const Icon = iconMap[technology.icon];

                        return (
                            <div
                                key={technology._id}
                                className="relative group w-[calc(50%-8px)] sm:w-[180px] h-32 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-400/40 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Tooltip */}
                                <div
                                    className="absolute left-1/2 bottom-full -translate-x-1/2 mb-3 px-4 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm font-medium whitespace-nowrap opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 z-50 pointer-events-none"
                                >
                                    {technology.name}
                                </div>

                                {/* Technology Card */}
                                <div
                                    className="h-32 flex items-center justify-center rounded-xl"
                                >
                                    {Icon && (
                                        <Icon
                                            className="w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                color: technology.color,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Technology;