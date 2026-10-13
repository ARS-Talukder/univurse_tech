import logo from "../../assets/images/logo.png";

const loaderStyles = {
    page: "flex h-screen items-center justify-center bg-slate-950",
    content: "flex flex-col items-center gap-6",
    logoWrap: "relative flex h-36 w-36 items-center justify-center",
    spinner:
        "absolute inset-0 animate-spin rounded-full border-2 border-slate-800 border-t-cyan-400",
    logo: "relative h-24 w-auto",
    brand: "text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300",
};

const Loading = () => {
    return (
        <div
            className={loaderStyles.page}
            role="status"
            aria-live="polite"
        >
            <div className={loaderStyles.content}>
                <div className={loaderStyles.logoWrap}>
                    <span className={loaderStyles.spinner} />
                    <img
                        src={logo}
                        alt="Univurse Tech"
                        width="96"
                        height="96"
                        decoding="async"
                        className={loaderStyles.logo}
                    />
                </div>
                <span className={loaderStyles.brand}>
                    Univurse Tech
                </span>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
