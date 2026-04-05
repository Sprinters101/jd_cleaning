import { Slide } from "react-awesome-reveal";
import { cn } from "../../lib/utils";
import Container from "../common/Container";
import Text from "../common/Text";

const OurGallery = () => {
    const data = [
        { id: 1, direction: "fade-left", delay: 0 },
        { id: 2, direction: "fade-down", delay: 200 },
        { id: 3, direction: "fade-up", delay: 300 },
        { id: 4, direction: "fade-right", delay: 400 },
    ];
    return (
        <div className="py-8 md:py-26">
            <Container className="">
                <Slide direction="down" duration={1000}>
                    <div className="text-center">
                        <Text
                            variant="b1_semibold"
                            className="text-blue-normal"
                        >
                            OUR GALLERY
                        </Text>
                        <Text variant="h2" className="text-neutral mt-2">
                            The Visual Difference
                        </Text>
                        <Text
                            variant="b2_regular"
                            className="text-neutral mt-2 hidden md:block"
                        >
                            Real results from homes we've cleaned
                        </Text>
                    </div>
                </Slide>
                <div className="mt-15.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.75 overflow-hidden">
                        {data?.map(({ id, direction }) => {
                            return (
                                <div
                                    // duration={1000}
                                    // delay={delay}
                                    // direction={direction}
                                    data-aos={direction}
                                    key={id}
                                >
                                    <img
                                        src={`/images/gallery/g_${id}.png`}
                                        alt=""
                                        className={cn(
                                            "block  mx-auto",
                                            id % 2 === 0 && "md:mt-10.5",
                                        )}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="md:mt-15.5 flex mt-10  items-center justify-center">
                    {/* <Button variant="primary" icon={"arrow"}>
                        Get a Free Quote Today
                    </Button> */}
                </div>
            </Container>
        </div>
    );
};

export default OurGallery;
