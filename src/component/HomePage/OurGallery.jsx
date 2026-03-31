import { cn } from "../../lib/utils";
import Container from "../common/Container";
import Text from "../common/Text";
import Button from "../ui/Button";

const OurGallery = () => {
    return (
        <div className="py-8 md:py-26">
            <Container className="">
                <div className="text-center">
                    <Text variant="b1_semibold" className="text-blue-normal">
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
                <div className="mt-15.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6.75">
                        {[1, 2, 3, 4]?.map((item) => {
                            return (
                                <img
                                    src={`/images/gallery/g_${item}.png`}
                                    alt=""
                                    className={cn(
                                        "block  mx-auto",
                                        item % 2 === 0 && "md:mt-10.5",
                                    )}
                                    key={item}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="md:mt-15.5 flex mt-10  items-center justify-center">
                    <Button variant="primary" icon={"arrow"}>
                        Get a Free Quote Today
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default OurGallery;
