import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Static from "../components/Static"
import HowAreYou from "../components/HowAreYou"
import Solve from "../components/Solve";
import Product from "../components/Product"
import Services from "../components/Services";
import Projects from "../components/Projects";
import Opinion from "../components/Opinion";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Person from "../components/Person";
import ClientsMarquee from "../components/ClientsMarquee";


const HomePage = () => {
    return (
        <div>
        <Navbar/>
        <main>
            <Hero/>
            <Static/>
            <HowAreYou/>
            <Solve/>
            <Product/>
            <Services/>
            <Projects/>
            <Person/>
            <ClientsMarquee/>
            <Opinion/>
            <CTASection/>
            <Footer/>
        </main>
        </div>
    );
};

export default HomePage;