import { Fade, Slide } from "react-awesome-reveal";
import Container from "../common/Container";
import Text from "../common/Text";
import Button from "../ui/Button";
import Features from "./Features";

const Hero = () => {
    return (
        <div className="relative pb-8 md:pb-26">
            <Container padding className="overflow-hidden">
                <div
                    className={`overflow-hidden bg-[linear-gradient(98.33deg,rgba(0,66,107,0.6)_5.16%,rgba(102,102,102,0)_92.95%),url('/images/hero.png')] bg-cover bg-center md:bg-center  bg-no-repeat  rounded-[2.5rem]  flex items-center px-6 md:px-16 pt-29.5 md:pt-54 pb-38.75 md:pb-44.25 text-white border border-blue-normal animate-slow-zoom`}
                >
                    <Fade
                        direction="left"
                        delay={200}
                        duration={1500}
                        // fraction={0}
                        triggerOnce
                        className=""
                    >
                        <div className="">
                            <img
                                src="/images/googleRate.png"
                                alt="google rate"
                                className="w-37.75 md:w-53.75"
                            />
                            <div className="">
                                <Text
                                    className="mt-2 max-w-68 md:max-w-161 text-white relative"
                                    variant="h1"
                                >
                                    Professional Cleaning Backed by Care &
                                    Experience{" "}
                                    <img
                                        src="/images/borderLine.png"
                                        alt="border line"
                                        className="absolute -bottom-px w-56 md:w-145.25"
                                    />
                                </Text>

                                <Text
                                    className="mt-2 md:mt-4 max-w-62.25 md:max-w-142 "
                                    variant="b2_regular"
                                >
                                    Family-owned carpet & floor cleaning in
                                    Salinas delivering fast, eco-friendly
                                    results that remove deep stains, eliminate
                                    odors, and leave your home looking brand
                                    new.
                                </Text>

                                <div className="mt-8 md:mt-16 flex flex-col md:flex-row  md:items-center gap-4">
                                    <Button
                                        variant="primary"
                                        className="md:px-8 w-full max-w-40.75 md::w-fit md:max-w-fit"
                                        icon={"arrow"}
                                    >
                                        Get a Free Quote
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="md:px-8 w-full max-w-40.75 md::w-fit md:max-w-fit"
                                        icon={"arrow"}
                                    >
                                        View Services
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Container>

            <Features />
        </div>
    );
};

export default Hero;
