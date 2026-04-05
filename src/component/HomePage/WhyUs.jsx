import React from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import { Fade, Slide } from "react-awesome-reveal";

const WhyUs = () => {
    const whyChooseData = [
        {
            id: 100,
            number: "01",
            title: "4+ Years of Proven Cleaning Experience",
            subtitle: "Residential & commercial expertise",
        },
        {
            id: 300,
            number: "02",
            title: "Family-Owned Business You Can Trust",
            subtitle: "James & Delmi built this on trust",
        },
        {
            id: 600,
            number: "03",
            title: "Eco-Friendly & Professional",
            subtitle: "Green products, pro equipment",
        },
        {
            id: 900,
            number: "04",
            title: "Bilingual Service",
            subtitle: "English and Spanish languages",
        },
    ];
    return (
        <div className="bg-grey-light py-5 pb-15 md:py-10">
            <Container>
                <div className="flex  justify-between md:gap-12 sm:gap-14 gap-8 flex-col-reverse md:flex-row">
                    <div className="md:size-146.25 max-h-146.25 bg-white rounded-[2.5rem] p-4 relative">
                        <img
                            src="/images/choose.png"
                            alt="A cleaner cleaning "
                            className="w-full h-full object-cover max-h-full rounded-4xl"
                        />

                        <Slide className=" max-w-47.5 md:max-w-65.5 w-full bg-white rounded-3xl p-8 absolute -bottom-10 md:-bottom-15 right-11.75 md:right-16">
                            <>
                                <Text className="text-blue-normal" variant="h2">
                                    100%
                                </Text>
                                <Text className="mt-1 text-grey  text-[0.625rem] md:text-[0.9375rem]">
                                    Customer satisfaction guaranteed in every
                                    visit.
                                </Text>
                            </>
                        </Slide>
                    </div>

                    <div className="w-full max-w-181.75">
                        <Text
                            variant="b1_semibold"
                            className="text-blue-normal"
                        >
                            WHY US?
                        </Text>
                        <Text variant="h2" className="text-neutral mt-4">
                            Why Choose J&D
                        </Text>

                        <div className="">
                            <div className="grid gap-6.75 md:gap-6.75 mt-4 md:mt-8 relative">
                                <div className="w-px h-[80%] absolute top-1/2 transform -translate-y-1/2 bg-blue-normal left-[55.85px] md:left-27.75">
                                    <div className="size-2 bg-blue-normal rounded-full absolute -top-2  -left-0.75" />
                                    <div className="size-2 bg-blue-normal rounded-full absolute top-15 md:top-32.75  -left-0.75" />
                                    <div className="size-2 bg-blue-normal rounded-full absolute top-34 md:top-65.5  -left-0.75" />
                                    <div className="size-2 bg-blue-normal rounded-full absolute -bottom-2 md:-bottom-2  -left-0.75" />
                                </div>

                                {whyChooseData.map((item) => (
                                    <Slide
                                        key={item.id}
                                        direction="down"
                                        delay={item?.id}
                                    >
                                        <Fade key={item.id} delay={item?.id}>
                                            <div className="flex gap-8 md:gap-14 items-center relative md:p-5.75">
                                                {/* Number Circle */}
                                                <div className="shrink-0 size-10 md:size-16 rounded-full bg-blue-light-hover text-blue-normal isCentered font-bold text-[1.1875rem] md:text-[1.875rem]">
                                                    {item.number}
                                                </div>

                                                {/* Content */}
                                                <div className="pt-1 text-neutral">
                                                    <Text
                                                        variant="b2_semibold"
                                                        className="font-semibold"
                                                    >
                                                        {item.title}
                                                    </Text>
                                                    <Text
                                                        variant="b3_regular"
                                                        className="text-grey mt-2"
                                                    >
                                                        {item.subtitle}
                                                    </Text>
                                                </div>
                                            </div>
                                        </Fade>
                                    </Slide>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUs;
