// import Footer from "./component/common/Footer";
import Navbar from "./component/common/Navbar";
// import Contact from "./component/HomePage/Contact";
import Hero from "./component/HomePage/Hero";
// import OurGallery from "./component/HomePage/OurGallery";
import OurServices from "./component/HomePage/OurServices";
// import OurStory from "./component/HomePage/OurStory";
// import Review from "./component/HomePage/Review";
import WhyUs from "./component/HomePage/WhyUs";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurServices />
            <WhyUs />
            {/* <OurGallery />
            <OurStory />
            <Review />
            <Contact />
            <Footer /> */}
        </>
    );
}

export default App;
