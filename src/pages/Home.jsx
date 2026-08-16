import { lazy, Suspense } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

const Services = lazy(() => import("../components/Services/Services"));
const Products = lazy(() => import("../components/Products/Products"));
const Technologies = lazy(() => import("../components/Technologies/Technologies"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs/WhyChooseUs"));
const MeetOurTeam = lazy(() => import("../components/MeetOurTeam/MeetOurTeam"));
const FAQ = lazy(() => import("../components/FAQ/FAQ"));
const Contact = lazy(() => import("../components/Contact/Contact"));

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
