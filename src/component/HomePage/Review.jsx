import { FaStar } from "react-icons/fa6";
import Container from "../common/Container";
import Text from "../common/Text";
import { cn } from "../../lib/utils";

const Review = () => {
    const reviewsData = [
        {
            id: 1,
            name: "Julie Cosenza",
            initials: "JC",
            rating: 5,
            text: "We scheduled with J&D for when we were on vacation. Ashley was prompt, communication was excellent. We came back to a home that smelled so fresh and clean. It’s hard to find good help these days, but you have an excellent company to work with. Thank you Ashley!",
        },
        {
            id: 2,
            name: "Emily Martin",
            initials: "EM",
            rating: 5,
            text: "They were able to get me on their schedule with short notice and came out in the evening to get my carpets clean. Very flexible and fair pricing. The carpets turned out great. Really know what they are doing.",
        },
        {
            id: 3,
            name: "Donna Lechner",
            initials: "DL",
            rating: 5,
            text: "Ashley just finished cleaning my carpets in two rooms. The carpets are still damp but look many times better than they have in years. The price was very reasonable. My carpets look beautiful and I highly recommend J&D Carpet Cleaning!",
        },
        {
            id: 4,
            name: "Linda Thomas",
            initials: "LT",
            rating: 5,
            text: "Ashley was very knowledgeable and friendly. The price was very reasonable. My carpets look beautiful and I highly recommend J&D Carpet Cleaning to do all your carpets.",
        },
    ];
    return (
        <div className="py-10.5">
            <Container>
                <div className="flex items-center justify-center gap-3.25 flex-col md:flex-row  ">
                    <div className="w-full order-2 md:order-1 flex justify-center flex-col gap-2.5 items-center md:items-stretch ">
                        <div className="md:flex md:justify-end">
                            <ReviewCard
                                data={reviewsData?.[0]}
                                className={""}
                            />
                        </div>{" "}
                        <div className="md:flex md:justify-start lg:-mt-8">
                            <ReviewCard
                                data={reviewsData?.[1]}
                                className={""}
                            />
                        </div>
                    </div>

                    <div className=" max-w-99.5 text-center w-full shrink-0 order-1 md:order-2  ">
                        <Text
                            variant="b1_semibold"
                            className="text-blue-normal"
                        >
                            OUR REVIEWS
                        </Text>
                        <Text variant="h2" className="text-neutral mt-4">
                            What Our <br className="hidden md:block" /> Clients
                            Say
                        </Text>
                    </div>

                    <div className="w-full  order-3 md:order-3  flex justify-center items-center md:items-stretch flex-col gap-2.5">
                        <div className="md:flex md:justify-start">
                            <ReviewCard
                                data={reviewsData?.[2]}
                                className={""}
                            />
                        </div>{" "}
                        <div className="md:flex md:justify-end lg:-mt-8">
                            <ReviewCard
                                data={reviewsData?.[3]}
                                className={""}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Review;

const ReviewCard = ({ className, data }) => {
    const { name, initials, text } = data;
    return (
        <div
            className={cn(
                "py-6.5 md:py-11.75 max-w-104  w-full relative overflow-hidden px-4.75 bg-blue-light border rounded-[0.625rem] border-blue-light-active",
                className,
            )}
        >
            <img
                src="/images/qoute.png"
                alt="quote"
                className="absolute top-0 -right-12.75 md:right-4.75 w-21.25"
            />

            <div className="flex items-center gap-3">
                <div className="rounded-full size-12 bg-white isCentered text-blue-normal">
                    <Text variant="b2">{initials}</Text>
                </div>
                <div className="">
                    <Text variant="b3_semibold" className="text-blue-normal">
                        {name}
                    </Text>
                    <div className="mt-1 text-gold flex gap-">
                        {[1, 2, 3, 4]?.map((i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                </div>
            </div>
            <Text variant="c2_regular" className="mt-6 text-grey">
                {text}
            </Text>
        </div>
    );
};
