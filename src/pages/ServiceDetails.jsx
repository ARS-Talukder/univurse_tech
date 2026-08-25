import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Loading from "../components/Shared/Loading";
import Seo from "../components/SEO/Seo";
import {
    createServiceMetaDescription,
    createServiceSlug,
} from "../utils/serviceUtils";

const SITE_URL = "https://univursetech.vercel.app";
const WHATSAPP_URL =
    "https://wa.me/8801845503651?text=Hello%20Univurse%20Tech%2C%20I%20want%20to%20discuss%20a%20service%20for%20my%20business.";
const CONTACT_EMAIL = "mailto:contact@univursetech.pro.bd";

const ServiceDetails = () => {
    const { slug } = useParams();

    const { data: services, isLoading, isError } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const response = await fetch("/data/services.json");

            if (!response.ok) {
                throw new Error("Failed to fetch services");
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
                                Failed to load service details.
                            </p>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const service = services.find(
        (item) => createServiceSlug(item.title) === slug
    );

    if (!service) {
        return (
            <>
                <Seo
                    title="Service Not Found | Univurse Tech"
                    description="The requested Univurse Tech service page could not be found."
                    canonical={`${SITE_URL}/services/${slug || ""}`}
                />
                <Header />
                <main className="min-h-screen bg-slate-950 pt-28">
                    <section>
                        <div className="container max-w-3xl">
                            <Link
                                to="/#services"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                            >
                                <FiArrowLeft />
                                Back to services
                            </Link>

                            <h1 className="mt-8">Service Not Found</h1>

                            <p className="mt-5 text-slate-400">
                                This service page is not available. Explore our
                                core services from the main portfolio.
                            </p>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const canonical = `${SITE_URL}/services/${createServiceSlug(service.title)}`;
    const metaDescription = createServiceMetaDescription(service);
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: service.title,
                url: canonical,
                description: service.description,
                provider: {
                    "@type": "Organization",
                    name: "Univurse Tech",
                    url: SITE_URL,
                },
                areaServed: ["Bangladesh", "Global"],
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
                        name: "Services",
                        item: `${SITE_URL}/#services`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: service.title,
                        item: canonical,
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Seo
                title={`${service.title} | Univurse Tech`}
                description={metaDescription}
                canonical={canonical}
                schema={serviceSchema}
            />
            <Header />

            <main className="min-h-screen bg-slate-950 pt-28">
                <section className="border-b border-slate-800/60">
                    <div className="container max-w-5xl">
                        <Link
                            to="/#services"
                            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                            <FiArrowLeft />
                            Back to services
                        </Link>

                        <span className="section-subtitle block">
                            Univurse Tech Service
                        </span>

                        <h1 className="mt-4">{service.title}</h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            {service.description}
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-btn inline-flex items-center justify-center gap-2"
                            >
                                Discuss This Service
                                <FiArrowRight />
                            </a>

                            <a
                                href={CONTACT_EMAIL}
                                className="secondary-btn inline-flex items-center justify-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-900/40">
                    <div className="container max-w-5xl">
                        <h2>What This Service Includes</h2>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            {service.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                                >
                                    <h3 className="text-xl text-cyan-400">
                                        {feature}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        Included as part of a practical service
                                        plan shaped around your business goal,
                                        workflow, and users.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container grid max-w-5xl gap-8 lg:grid-cols-3">
                        {service.problems && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Problems We Solve
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {service.problems.map((problem) => (
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

                        {service.deliverables && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Deliverables
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {service.deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="text-sm leading-7 text-slate-400"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )}

                        {service.benefits && (
                            <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7">
                                <h2 className="text-2xl">
                                    Business Benefits
                                </h2>

                                <ul className="mt-5 space-y-3">
                                    {service.benefits.map((benefit) => (
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

export default ServiceDetails;
