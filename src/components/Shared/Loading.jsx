import LoadingGif from "../../assets/images/univurse_loading.gif";
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img width={500} src={LoadingGif} alt="Loading..." />
        </div>
    );
};

export default Loading;