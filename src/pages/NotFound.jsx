import { Link } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Seo from "../components/SEO/Seo";

const NotFound = () => (
    <>
        <Seo
            title="Page Not Found | UnivurseTech"
            description="The requested UnivurseTech page could not be found."
            canonical="https://univursetech.pro.bd/"
            robots="noindex, follow"
        />
        <Header />
        <main className="min-h-screen bg-slate-950 pt-28 text-slate-100 transition-colors duration-200">
            <section>
                <div className="container max-w-3xl text-center">
                    <span className="section-subtitle">404 Error</span>
                    <h1>Page Not Found</h1>
                    <p className="mx-auto mt-5 max-w-xl text-slate-400">
                        The page you requested is unavailable or may have moved.
                    </p>
                    <Link to="/" className="primary-btn mt-8 inline-flex">
                        Return to Home
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
    </>
);

export default NotFound;
