import React from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import Button from "../ui/Button";

const OurServices = () => {
    const servicesData = [
        {
            id: 1,
            title: "Carpet Cleaning",
            desc: "Deep extraction and stain removal that restores the original texture and color of your carpets.",
        },
        {
            id: 2,
            title: "Upholstery & Furniture",
            desc: "Delicate treatment for your sofas, armchairs, and upholstery, refreshing your living space.",
        },
        {
            id: 3,
            title: "Tile & Grout",
            desc: "Restoring stubborn grime from tile surfaces in your kitchen and bathrooms.",
        },
        {
            id: 4,
            title: "Rug Cleaning",
            desc: "Removing tough stains from rugs to restore their vibrant colors and freshness to your living spaces.",
        },
    ];

    return (
        <div className="pb-8 md:pb-26">
            <Container>
                <div className="text-center md:text-left">
                    <Text variant="b1_semibold" className="text-blue-normal">
                        OUR SERVICES
                    </Text>
                    <Text variant="h2" className="text-neutral mt-2">
                        Professional Cleaning Services
                    </Text>
                    <Text
                        variant="b2_regular"
                        className="text-neutral mt-2 max-w-78.25 md:max-w-113.75 mx-auto md:mx-0"
                    >
                        Utilizing professional-grade equipment and eco-friendly
                        products for a safer, deeper clean.
                    </Text>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-12 gap-6.75">
                    {servicesData?.map(({ id, desc, title }) => {
                        return (
                            <div
                                className="group rounded-[1.25rem] max-w-[20rem] md:max-w-full mx-auto transition-all h-117.25 overflow-hidden relative"
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

                <div className="md:mt-12 mt-5 flex items-center justify-center">
                    <Button variant="primary" icon={"arrow"}>
                        Get a Free Quote Today
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default OurServices;
