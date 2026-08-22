import LoadingGif from "../../assets/images/univurse_loading.gif";
const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-slate-950">
            <img
                width={500}
                src={LoadingGif}
                alt="Loading..."
                className="w-[min(80vw,500px)]"
            />
        </div>
    );
};

export default Loading;
