import { FaClover } from "react-icons/fa6";
import Container from "../common/Container";
import Text from "../common/Text";

const Features = () => {
    const data = [
        {
            id: 1,
            img: "",
            label: "Family-Owned",
        },
        {
            id: 2,
            img: "",
            label: "Eco-Friendly",
        },
        {
            id: 3,
            img: "",
            label: "4+ Years Experience",
        },
        {
            id: 4,
            img: "",
            label: "Bilingual Service (EN/ES)",
        },
    ];

    return (
        <div>
            <Container className="-mt-[52px]">
                <div className="p-4 md:p-8 rounded-[1.875rem] bg-white border border-blue-light-active max-w-[1079px] mx-auto max-h-[7.5rem]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-1">
                        {data?.map(({ id, label }) => {
                            return (
                                <div
                                    className="flex items-center gap-2 w-fit"
                                    key={id}
                                >
                                    <div className="size-8 md:size-14 bg-blue-light rounded-full isCentered shrink-0">
                                        <img
                                            src={`/images/features/f_${id}.png`}
                                            alt=""
                                            className="size-5 md:size-9"
                                        />
                                    </div>

                                    <Text
                                        variant="b3"
                                        className="text-grey tracking-tight"
                                    >
                                        {label}
                                    </Text>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;
