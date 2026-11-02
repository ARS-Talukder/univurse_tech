
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiArrowRight,
    FiGlobe,
    FiHeart,
    FiHome,
    FiBookOpen,
} from "react-icons/fi";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import { createProductSlug } from "../../utils/productUtils";

const categorySlugMap = {
    "digital-commerce-edtech": "1",
    "health-operations-logistics": "2",
    "facility-lifestyle-automation": "3",
    "brand-portfolio-experiences": "4",
};

const categoryIcons = {
    "1": FiBookOpen,
    "2": FiHeart,
    "3": FiHome,
    "4": FiGlobe,
};

const categoryColors = {
    "1": {
        text: "text-cyan-400",
        border: "border-cyan-400/20",
        background: "bg-cyan-400/10",
        gradient: "from-cyan-500/10 to-blue-500/5",
    },
    "2": {
        text: "text-indigo-400",
        border: "border-indigo-400/20",
        background: "bg-indigo-400/10",
        gradient: "from-indigo-500/10 to-blue-500/5",
    },
    "3": {
        text: "text-violet-400",
        border: "border-violet-400/20",
        background: "bg-violet-400/10",
        gradient: "from-violet-500/10 to-purple-500/5",
    },
    "4": {
        text: "text-cyan-400",
        border: "border-cyan-400/20",
        background: "bg-cyan-400/10",
        gradient: "from-cyan-500/10 to-purple-500/5",
    },
};

const ProductCategory = () => {
    const { categorySlug } = useParams();

    const {
        data: categories = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("/data/products.json");

            if (!response.ok) {
                throw new Error("Failed to load products.");
            }

            return response.json();
        },
    });

    const categoryId = categorySlugMap[categorySlug];

    const category = categories.find(
        (item) => item._id === categoryId
    );

    const products = category?.items || [];
    const Icon = categoryIcons[categoryId] || FiGlobe;

    const colors = categoryColors[categoryId] || categoryColors["1"];

    if (isLoading) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-200">
                    <Loading />
                </main>
                <Footer />
            </>
        );
    }

    if (isError) {
        return (
            <>
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100 transition-colors duration-200">
                    <div className="text-center">
                        <h2 className="mb-3 text-2xl font-bold text-slate-100">
                            Unable to Load Products
                        </h2>

                        <p className="text-slate-400">
                            {error?.message || "Something went wrong."}
                        </p>

                        <Link
                            to="/"
                            className="primary-btn mt-6 inline-flex items-center gap-2"
                        >
                            <FiArrowLeft />
                            Back to Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (!category) {
        return (
            <>
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100 transition-colors duration-200">
                    <div className="text-center">
                        <h2 className="mb-3 text-3xl font-bold text-slate-100">
                            Category Not Found
                        </h2>

                        <p className="text-slate-400">
                            The product category you are looking for does not exist.
                        </p>

                        <Link
                            to="/"
                            className="primary-btn mt-6 inline-flex items-center gap-2"
                        >
                            <FiArrowLeft />
                            Back to Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-slate-950 py-16 text-slate-100 transition-colors duration-200 sm:py-20">
                <div className="container mx-auto px-4">
                    {/* Category Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-14 max-w-3xl text-center"
                    >
                        <div className="mt-8 mb-2 lg:mt-4 lg:mb-4 flex items-center justify-center rounded-2xl">
                            <div>
                                <Icon
                                    className={`lg:w-8 lg:h-8 mr-4 text-3xl ${colors.text}`}
                                />
                            </div>

                            <p className="text-slate-100 font-bold lg:text-2xl">
                                {category.group}
                            </p>

                            <div className="hidden lg:flex h-full items-center ml-4">
                                <div
                                    className={`inline-flex items-center rounded-full border ${colors.border} ${colors.background} px-3 py-0.5 text-sm ${colors.text}`}
                                >
                                    {products.length}{" "}
                                    {products.length === 1 ? "Product" : "Products"}
                                </div>
                            </div>
                        </div>

                        <p className="mx-auto max-w-2xl leading-7 text-slate-400 sm:text-lg">
                            {category.groupDescription}
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
                            {products.map((product) => {
                                return (
                                    <div key={product._id} className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300">
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
                                            <Link
                                                to={`/products/${createProductSlug(product.title)}`}
                                                className={`block transition-colors ${colors.hover}`}
                                            >
                                                <h4>{product.title}</h4>
                                            </Link>

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
                                        <div className="mt-7 pt-5 border-t border-slate-800 lg:flex items-center justify-between gap-4">

                                            <div className="mb-6 lg:mb-0">
                                                <span className="text-xs font-mono text-slate-500">
                                                    Core: {product.core}
                                                </span>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-4">
                                                <Link
                                                    to={`/products/${createProductSlug(product.title)}`}
                                                    aria-label={`View details for ${product.title}`}
                                                    className={`primary-btn text-xs font-semibold inline-flex items-center gap-1 ${colors.button}`}
                                                >
                                                    Details
                                                    <FiArrowRight aria-hidden="true" />
                                                </Link>

                                                {product.demo === "details" ? null : product.demo !== "#" ? (
                                                    <a
                                                        href={product.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Open live demo for ${product.title}`}
                                                        className={`primary-btn text-xs font-semibold inline-flex items-center gap-1 ${colors.button}`}
                                                    >
                                                        {product.demoLabel || "Live Demo"}
                                                        <FiArrowRight aria-hidden="true" />
                                                    </a>
                                                ) : (
                                                    <span className="text-xs font-semibold text-slate-500">
                                                        Demo Coming Soon
                                                    </span>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-16 text-center">
                            <h2 className="mb-3 text-xl font-semibold text-slate-100">
                                No Products Yet
                            </h2>

                            <p className="text-slate-400">
                                Products in this category will be available soon.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ProductCategory;
