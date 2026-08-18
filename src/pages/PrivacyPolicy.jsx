import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import { useQuery } from "@tanstack/react-query";
const PrivacyPolicy = () => {
    const {data: privacyPolicy,isLoading,isError,} = useQuery({
        queryKey: ["privacy-policy"],
        queryFn: async () => {
            const res = await fetch("/data/privacy.json");

            if (!res.ok) {
                throw new Error("Failed to fetch privacy policy");
            }

            return res.json();
        },
    });

    if (isLoading) {
        return (
            <>
                <Header />

                <main className="min-h-screen bg-slate-950 pt-10">
                    <section className="border-b border-slate-800/60">
                        <div className="container max-w-4xl">
                            <p className="text-slate-400">
                                Loading privacy policy...
                            </p>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }

    if (isError) {
        return (
            <>
                <Header />

                <main className="min-h-screen bg-slate-950 pt-10">
                    <section className="border-b border-slate-800/60">
                        <div className="container max-w-4xl">
                            <p className="text-red-400">
                                Failed to load privacy policy.
                            </p>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
    return (
        <>
            <Header />

            <main className="min-h-screen bg-slate-950 pt-10">
                <section className="border-b border-slate-800/60">
                    <div className="container max-w-4xl">
                        <span className="section-subtitle">
                            Privacy Policy
                        </span>

                        <h1>Privacy Policy</h1>

                        <p className="mt-5 text-sm text-slate-400">
                            Last updated: August 15, 2026
                        </p>

                        <div className="mt-12 space-y-8">
                            {privacyPolicy.map((p) => (
                                <article
                                    key={p._id}
                                    className="border-b border-slate-800 pb-8 last:border-b-0"
                                >
                                    <h3 className="text-xl md:text-2xl">
                                        {p.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {p.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;