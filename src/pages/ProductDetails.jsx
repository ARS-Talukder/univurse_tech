import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Loading from "../components/Shared/Loading";
import Seo from "../components/SEO/Seo";
import {
    createProductMetaDescription,
    flattenProductGroups,
} from "../utils/productUtils";

const SITE_URL = "https://univursetech.vercel.app";
const WHATSAPP_URL =
    "https://wa.me/8801845503651?text=Hello%20Univurse%20Tech%2C%20I%20want%20to%20request%20a%20similar%20software%20solution.";

const ProductDetails = () => {
    const { slug } = useParams();

    const { data: productGroups, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("/data/products.json");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            return response.json();
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-slate-950 pt-28">
                    <section>
                        <div className="container">
                            <p className="text-red-400">
                                Failed to load product details.
                            </p>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const products = flattenProductGroups(productGroups);
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <>
                <Seo
                    title="Product Not Found | Univurse Tech"
                    description="The requested Univurse Tech product page could not be found."
                    canonical={`${SITE_URL}/products/${slug || ""}`}
                />
                <Header />
                <main className="min-h-screen bg-slate-950 pt-28">
                    <section>
                        <div className="container max-w-3xl">
                            <Link
                                to="/#products"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                            >
                                <FiArrowLeft />
                                Back to products
                            </Link>

                            <h1 className="mt-8">Product Not Found</h1>

                            <p className="mt-5 text-slate-400">
                                This product page is not available. Explore our
                                current software products and digital solutions
                                from the main portfolio.
                            </p>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const canonical = `${SITE_URL}/products/${product.slug}`;
    const metaDescription = createProductMetaDescription(product);
    const productSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                name: product.title,
                applicationCategory: product.category,
                operatingSystem: "Web",
                url: canonical,
                description: product.description,
                creator: {
                    "@type": "Organization",
                    name: "Univurse Tech",
                    url: SITE_URL,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${SITE_URL}/`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Products",
                        item: `${SITE_URL}/#products`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: product.title,
                        item: canonical,
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Seo
                title={`${product.title} | Univurse Tech`}
                description={metaDescription}
                canonical={canonical}
                schema={productSchema}
            />
            <Header />

            <main className="min-h-screen bg-slate-950 pt-28">
                <section className="border-b border-slate-800/60">
                    <div className="container">
                        <Link
                            to="/#products"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                            <FiArrowLeft />
                            Back to products
                        </Link>

                        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                            <div>
                                <span className="section-subtitle">
                                    {product.group}
                                </span>

                                <h1 className="mt-4 max-w-4xl">
                                    {product.title}
                                </h1>

                                <p className="mt-4 text-base font-semibold uppercase tracking-wider text-cyan-400">
                                    {product.subtitle}
                                </p>

                                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                                    {product.description}
                                </p>

                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    {product.demo !== "#" ? (
                                        <a
                                            href={product.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="primary-btn inline-flex items-center justify-center gap-2"
                                        >
                                            Open Live Demo
                                            <FiExternalLink />
                                        </a>
                                    ) : (
                                        <a
                                            href="/#contact"
                                            className="primary-btn inline-flex items-center justify-center gap-2"
                                        >
                                            Discuss This Product
                                            <FiArrowRight />
                                        </a>
                                    )}

                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondary-btn inline-flex items-center justify-center"
                                    >
                                        Request Similar Solution
                                    </a>
                                </div>
                            </div>

                            <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7">
                                <h2 className="text-2xl">
                                    Product Overview
                                </h2>

                                <dl className="mt-6 space-y-5">
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Category
                                        </dt>
                                        <dd className="mt-1 text-slate-200">
                                            {product.category}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Technology
                                        </dt>
                                        <dd className="mt-1 text-slate-200">
                                            {product.technology}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Core Stack
                                        </dt>
                                        <dd className="mt-1 text-slate-200">
                                            {product.core}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Demo Status
                                        </dt>
                                        <dd className="mt-1 text-slate-200">
                                            {product.demo !== "#"
                                                ? product.demoLabel || "Live Demo"
                                                : "Demo Coming Soon"}
                                        </dd>
                                    </div>
                                </dl>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900/40">
                    <div className="container grid gap-8 lg:grid-cols-3">
                        {product.problems && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Problems It Solves
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {product.problems.map((problem) => (
                                        <li
                                            key={problem}
                                            className="text-sm leading-7 text-slate-400"
                                        >
                                            {problem}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}

                        {product.capabilities && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Key Capabilities
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {product.capabilities.map((capability) => (
                                        <li
                                            key={capability}
                                            className="text-sm leading-7 text-slate-400"
                                        >
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}

                        {product.benefits && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Business Benefits
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {product.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="text-sm leading-7 text-slate-400"
                                        >
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default ProductDetails;
