import Navbar from "./component/common/Navbar";
import Hero from "./component/HomePage/Hero";
import OurServices from "./component/HomePage/OurServices";
import WhyUs from "./component/HomePage/WhyUs";
import Footer from "./component/common/Footer";
import Contact from "./component/HomePage/Contact";
import OurGallery from "./component/HomePage/OurGallery";
import OurStory from "./component/HomePage/OurStory";
import Review from "./component/HomePage/Review";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./component/common/BackToTop";
import Preview from "./component/ui/Preview";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms (default: 400)
            //   once: true,         // whether animation should happen only once
            // offset: 120,     // offset (in px) from the original trigger point
            // easing: 'ease',  // easing function
            // delay: 100,
        });

        // Optional: refresh AOS when content changes dynamically
        // AOS.refresh();
    }, []);
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
            <BackToTop />
            {/* <Preview /> */}
        </>
    );
}

export default App;
