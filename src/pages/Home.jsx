import { lazy, Suspense } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Seo from "../components/SEO/Seo";

const Services = lazy(() => import("../components/Services/Services"));
const Products = lazy(() => import("../components/Products/Products"));
const Technologies = lazy(() => import("../components/Technologies/Technologies"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs/WhyChooseUs"));
const MeetOurTeam = lazy(() => import("../components/MeetOurTeam/MeetOurTeam"));
const FAQ = lazy(() => import("../components/FAQ/FAQ"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://univursetech.pro.bd/#organization",
            name: "UnivurseTech",
            alternateName: [
                "Univurse Tech",
                "UnivurseTech Software Company",
                "Univurse Tech Bangladesh",
            ],
            url: "https://univursetech.pro.bd/",
            logo: "https://univursetech.pro.bd/favicon.svg",
            description:
                "UnivurseTech is a software company in Bangladesh building custom software, web applications, mobile apps, business automation, e-commerce platforms, and digital solutions.",
            email: "contact@univursetech.pro.bd",
            telephone: "+8801845503651",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801845503651",
                contactType: "customer support",
                areaServed: ["BD", "Global"],
                availableLanguage: ["English", "Bengali"],
            },
            sameAs: [
                "https://www.linkedin.com/company/univurse-tech/",
            ],
            founder: {
                "@type": "Person",
                name: "Abdur Rahim",
                url: "https://ad-rahim.vercel.app/",
            },
            areaServed: ["Bangladesh", "Global"],
            knowsAbout: [
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Business Automation",
                "E-Commerce Development",
                "Enterprise Software",
            ],
        },
        {
            "@type": "WebSite",
            "@id": "https://univursetech.pro.bd/#website",
            url: "https://univursetech.pro.bd/",
            name: "UnivurseTech",
            alternateName: "Univurse Tech",
            publisher: {
                "@id": "https://univursetech.pro.bd/#organization",
            },
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://univursetech.pro.bd/#service",
            name: "UnivurseTech",
            alternateName: "Univurse Tech",
            url: "https://univursetech.pro.bd/",
            description:
                "Software development and business automation services in Bangladesh for companies that need reliable digital products.",
            areaServed: ["Bangladesh", "Global"],
            serviceType: [
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "Business Automation",
                "UX Design",
                "Digital Marketing",
            ],
        },
        {
            "@type": "FAQPage",
            "@id": "https://univursetech.pro.bd/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Who is Univurse Tech?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "UnivurseTech, also known as Univurse Tech, is a software development company in Bangladesh that builds modern, scalable, and business-driven digital solutions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What services does Univurse Tech offer?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Univurse Tech provides web development, mobile app development, custom software development, enterprise product development, digital marketing, SEO, and UX design solutions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you build custom websites, applications, and software for my business?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Univurse Tech builds custom websites, web applications, mobile apps, and software systems based on business needs, workflows, users, and growth goals.",
                    },
                },
            ],
        },
    ],
};

const SectionLoader = () => (
    <section className="bg-slate-950">
        <div className="container flex min-h-[320px] items-center justify-center">
            <div className="flex items-center gap-2 text-cyan-400">
                <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400" />
                <span
                    className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400"
                    style={{ animationDelay: "0.15s" }}
                />
                <span
                    className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-400"
                    style={{ animationDelay: "0.3s" }}
                />
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <Seo
                title="UnivurseTech | Software Company in Bangladesh"
                description="UnivurseTech, also known as Univurse Tech, is a software company in Bangladesh building custom software, web apps, mobile apps, business automation, e-commerce platforms, and digital solutions."
                canonical="https://univursetech.pro.bd/"
                schema={homeSchema}
            />
            <Header />
            <Banner />
            <Suspense fallback={<SectionLoader />}>
                <Services />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Products />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Technologies />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <WhyChooseUs />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <MeetOurTeam />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <FAQ />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Contact />
            </Suspense>
            <Footer />
        </>
    );
};

export default Home;
