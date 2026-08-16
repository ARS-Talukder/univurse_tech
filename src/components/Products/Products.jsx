import { useEffect, useState } from "react";
import { FiArrowUpRight, FiBookOpen, FiHeart, FiHome, } from "react-icons/fi";
const iconMap = {
    book: FiBookOpen,
    heart: FiHeart,
    home: FiHome,
};

const colorClasses = {
    cyan: {
        icon: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        technology: "text-cyan-400",
        hover: "group-hover:text-cyan-400",
        button: "text-cyan-400 hover:text-cyan-300",
    },

    indigo: {
        icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        technology: "text-indigo-400",
        hover: "group-hover:text-indigo-400",
        button: "text-indigo-400 hover:text-indigo-300",
    },

    violet: {
        icon: "bg-violet-500/10 text-violet-400 border-violet-500/20",
        technology: "text-violet-400",
        hover: "group-hover:text-violet-400",
        button: "text-violet-400 hover:text-violet-300",
    },
};

const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const response = await fetch("/data/products.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();

                setProductsData(data);
            } catch (error) {
                console.error("Products fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    /* Loading */
    if (loading) {
        return (
            <section id="products" className="bg-slate-950">
                <div className="container min-h-[400px] flex items-center justify-center">
                    <div className="flex items-center gap-2 text-cyan-400">
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

    /* Error */
    if (error) {
        return (
            <section id="products" className="bg-slate-950">
                <div className="container min-h-[400px] flex items-center justify-center">
                    <p className="text-red-400">
                        Failed to load products.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="products" className="bg-slate-950">
            <div className="container">

                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <span className="section-subtitle">
                        Our Products & Solutions
                    </span>

                    <h2>
                        Software Solutions That Move{" "}
                        <span className="gradient-text">
                            Business Forward
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl">
                        Explore our core software products built to simplify operations, improve efficiency, and help businesses grow.
                    </p>
                </div>

                {/* Product Groups */}
                <div className="space-y-24">
                    {productsData.map((group) => {
                        const Icon = iconMap[group.icon];
                        const colors = colorClasses[group.color];

                        return (
                            <div key={group.group}>

                                {/* Group Header */}
                                <div className="flex items-start gap-4 mb-8">

                                    <div
                                        className={`p-3 rounded-xl border ${colors.icon}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <div>
                                        <h3>{group.group}</h3>

                                        <p className="mt-2 max-w-2xl text-sm">
                                            {group.groupDescription}
                                        </p>
                                    </div>

                                </div>

                                {/* Products */}
                                <div
                                    className={`grid gap-6 ${group.products.length === 3
                                        ? "lg:grid-cols-3"
                                        : "lg:grid-cols-2"
                                        }`}
                                >
                                    {group.products.map((product) => (
                                        <div
                                            key={product.title}
                                            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300"
                                        >
                                            <div>

                                                {/* Technology + Category */}
                                                <div className="flex items-center justify-between gap-4 mb-5">

                                                    <span
                                                        className={`text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-800 border border-slate-700 ${colors.technology}`}
                                                    >
                                                        {product.technology}
                                                    </span>

                                                    <span className="text-xs text-slate-500 font-mono">
                                                        {product.category}
                                                    </span>

                                                </div>

                                                {/* Title */}
                                                <h4 className={`transition-colors ${colors.hover}`}>
                                                    {product.title}
                                                </h4>

                                                {/* Subtitle */}
                                                <p className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                                    {product.subtitle}
                                                </p>

                                                {/* Description */}
                                                <p className="mt-5 text-sm leading-7 text-slate-300">
                                                    {product.description}
                                                </p>

                                            </div>

                                            {/* Footer */}
                                            <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between gap-4">

                                                <span className="text-xs font-mono text-slate-500">
                                                    Core: {product.core}
                                                </span>

                                                {product.demo && product.demo !== "#" && product.demoStatus !== "unavailable" ? (
                                                    <a
                                                        href={product.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`shrink-0 text-xs font-semibold inline-flex items-center gap-1 ${colors.button}`}
                                                    >
                                                        {product.demoLabel || "View Demo"}
                                                        <FiArrowUpRight />
                                                    </a>
                                                ) : product.demoStatus === "unavailable" ? (
                                                    <span
                                                        title={product.demoNote}
                                                        className="shrink-0 text-xs font-semibold text-amber-300"
                                                    >
                                                        {product.demoLabel || "Preview Updating"}
                                                    </span>
                                                ) : (
                                                    <span className="shrink-0 text-xs font-semibold text-slate-500">
                                                        Demo Coming Soon
                                                    </span>
                                                )}

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Products;
