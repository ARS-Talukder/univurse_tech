import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ/FAQ";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import Technologies from "../components/Technologies/Technologies";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Services />
            <Products />
            <Technologies />
            <WhyChooseUs />
            <MeetOurTeam />
            <FAQ />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;