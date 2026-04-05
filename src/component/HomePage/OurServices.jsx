import React from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import Button from "../ui/Button";
import { Fade, Slide } from "react-awesome-reveal";

const OurServices = () => {
    const servicesData = [
        {
            id: 1,
            delay: 0,
            title: "Carpet Cleaning",
            desc: "Deep extraction and stain removal that restores the original texture and color of your carpets.",
        },
        {
            id: 2,
            delay: 200,
            title: "Upholstery & Furniture",
            desc: "Delicate treatment for your sofas, armchairs, and upholstery, refreshing your living space.",
        },
        {
            id: 3,
            delay: 400,
            title: "Tile & Grout",
            desc: "Restoring stubborn grime from tile surfaces in your kitchen and bathrooms.",
        },
        {
            id: 4,
            delay: 600,
            title: "Rug Cleaning",
            desc: "Removing tough stains from rugs to restore their vibrant colors and freshness to your living spaces.",
        },
    ];

    return (
        <div className="pb-8 md:pb-26 pt-8 md:pt-26 " id="services">
            <Container>
                <Slide direction="left">
                    <div className="text-center md:text-left">
                        <Text
                            variant="b1_semibold"
                            className="text-blue-normal"
                        >
                            OUR SERVICES
                        </Text>
                        <Text variant="h2" className="text-neutral mt-2">
                            Professional Cleaning Services
                        </Text>
                        <Text
                            variant="b2_regular"
                            className="text-neutral mt-2 max-w-78.25 md:max-w-113.75 mx-auto md:mx-0"
                        >
                            Utilizing professional-grade equipment and
                            eco-friendly products for a safer, deeper clean.
                        </Text>
                    </div>
                </Slide>

                <div className=" overflow-hidden md:overflow-visible grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-12 gap-6.75">
                    {servicesData?.map(({ id, desc, title }) => {
                        return (
                            <div
                                className="group rounded-[1.25rem] max-w-[20rem] md:max-w-full mx-auto transition-all h-117.25 overflow-hidden relative"
                                data-aos="slide-up"
                                // data-aos-delay={delay}
                                key={id}
                            >
                                <img
                                    src={`/images/services/s_${id}.png`}
                                    alt=""
                                    className="w-full h-full object-cover scale-[1.1] group-hover:scale-[1] duration-700 transition-all"
                                />
                                <div className="h-31.5 w-full p-4  absolute  bottom-0 bg-dark/40 text-white ">
                                    <Text variant="b2">{title}</Text>
                                    <Text
                                        variant="c1"
                                        className="mt-1 text-grey-light"
                                    >
                                        {desc}
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Fade
                    duration={1000}
                    className="md:mt-12 mt-5 flex items-center justify-center"
                >
                    <a
                        href="https://book.housecallpro.com/book/JD-Carpet-Cleaning/33f42e0783124ccabd67d76c7940b7b2?v2=true&fbclid=PAVERFWAQvW9xleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaetpnX6Tnw6cfc6RaxIY2nd5MqhVXNJXlesf62Zf4hmu-lz29u_XqrXQqBBxw_aem_ikpqsf8O91oFZlEiVrUCng"
                        target="_blank"
                    >
                        <Button variant="primary" icon={"arrow"}>
                            Get a Free Quote Today
                        </Button>
                    </a>
                </Fade>
            </Container>
        </div>
    );
};

export default OurServices;
