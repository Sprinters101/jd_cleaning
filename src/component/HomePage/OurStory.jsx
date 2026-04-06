import React from "react";
import Container from "../common/Container";
import Text from "../common/Text";
import { LuHandshake } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";

const OurStory = () => {
    return (
        <div className="pb-8 md:pb-26" id="about">
            <Container className="flex items-center justify-center gap-8 md:gap-27.75 lg:gap-27.75 md:flex-row flex-col">
                <Fade direction="left">
                    <div className="max-w-134.25 w-full text-center md:text-left">
                        <Text
                            variant="b1_semibold"
                            className="text-blue-normal"
                        >
                            OUR STORY
                        </Text>
                        <Text variant="h2" className="text-neutral mt-2">
                            Meet James & Delmy
                        </Text>
                        <Text
                            variant="b1_regular"
                            className="text-neutral mt-2 md:mt-8 text-xs md:text-[1.1875rem]"
                        >
                            Founded by James and Delmy, J&D Carpet Cleaning was
                            born from years of hands-on experience in the carpet
                            cleaning industry and a shared dream to build a
                            family business that values quality, trust, and
                            community.
                        </Text>

                        <div className="flex mt-5 md:mt-8 text-left gap-8 md:gap-6 items-center relative ">
                            {/* Number Circle */}
                            <div className="shrink-0 size-16 rounded-full bg-blue-light-hover text-blue-normal isCentered font-bold text-2xl">
                                <LuHandshake />
                            </div>

                            {/* Content */}
                            <div className="pt-1 text-neutral">
                                <Text
                                    variant="b2_semibold"
                                    className="font-semibold text-[0.9375rem] md:text-[1.1875rem] text-neutral "
                                >
                                    Our Promise
                                </Text>
                                <Text
                                    variant="b3_regular"
                                    className="text-grey"
                                >
                                    "We treat your home as if it were our own."
                                </Text>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade direction="right">
                    <div className="">
                        <img
                            src="/images/admin.png"
                            alt="owners Images"
                            className="max-h-146.25"
                        />
                    </div>
                </Fade>
            </Container>
        </div>
    );
};

export default OurStory;
