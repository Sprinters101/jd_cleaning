import Navbar from "./component/common/Navbar";
import Hero from "./component/HomePage/Hero";
import OurServices from "./component/HomePage/OurServices";
import WhyUs from "./component/HomePage/WhyUs";
import Footer from "./component/common/Footer";
import Contact from "./component/HomePage/Contact";
import OurGallery from "./component/HomePage/OurGallery";
import OurStory from "./component/HomePage/OurStory";
import Review from "./component/HomePage/Review";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurServices />
            <WhyUs />
            <OurGallery />
            <OurStory />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
