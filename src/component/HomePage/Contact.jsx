import React from "react";
import Container from "../common/Container";
import { cn } from "../../lib/utils";
import Button from "../ui/Button";
import Text from "../common/Text";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    const contactData = [
        {
            icon: <IoCallOutline />,
            title: "Phone Number",
            value: "(831) 682-6739",
        },
        {
            icon: <HiOutlineMail />,
            title: "Email Address",
            value: "carpetcleaningjyd@gmail.com",
        },
        {
            icon: <IoTimeOutline />,
            title: "Opening Hours",
            value: "Mon-Sat, 9:00 AM - 6:00 PM",
        },
    ];
    return (
        <div className="py-8 md:py-26" id="contact">
            <Container className="overflow-hidden">
                <div
                    className={cn(
                        `bg-grey-light w-full flex items-end flex-col md:flex-row rounded-[1.875rem] md:bg-[url("/images/contactPattern.png")] bg-right bg-no-repeat`,
                    )}
                >
                    <div className="p-5 md:p-12 w-full max-w-137.5">
                        <Fade direction="left">
                            <>
                                <div className=" text-center md:text-left">
                                    <Text
                                        variant="b1_bold"
                                        className=" text-neutral font-bold "
                                    >
                                        Ready for a Cleaner, <br /> Healthier
                                        Home?
                                    </Text>
                                    <Text
                                        variant="b3_regular"
                                        className="text-grey mt-2 max-w-111"
                                    >
                                        Our team is standing by to provide a
                                        custom quote tailored to your specific
                                        needs.
                                    </Text>
                                </div>

                                <div className="mt-6 md:mt-6 space-y-4">
                                    {contactData?.map((item) => {
                                        return (
                                            <div
                                                className="flex gap-4"
                                                key={item?.title}
                                            >
                                                <div className="size-12 text-[1.5rem] text-blue-normal bg-blue-light-hover isCentered rounded-full">
                                                    {item?.icon}
                                                </div>
                                                <div className="">
                                                    <Text className="text-[0.625rem] md:text-xs text-grey">
                                                        {item?.title}
                                                    </Text>
                                                    <Text className="mt-1 font-medium text-[0.9375rem] md:text-[1.1875rem] text-neutral">
                                                        {item?.value}
                                                    </Text>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-10 hidden md:block ">
                                    <a
                                        href="https://book.housecallpro.com/book/JD-Carpet-Cleaning/33f42e0783124ccabd67d76c7940b7b2?v2=true&fbclid=PAVERFWAQvW9xleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaetpnX6Tnw6cfc6RaxIY2nd5MqhVXNJXlesf62Zf4hmu-lz29u_XqrXQqBBxw_aem_ikpqsf8O91oFZlEiVrUCng"
                                        target="_blank"
                                    >
                                        <Button
                                            variant="primary"
                                            icon={"arrow"}
                                        >
                                            Get a Free Quote Today
                                        </Button>
                                    </a>
                                </div>
                            </>
                        </Fade>
                    </div>

                    <div
                        className={cn(
                            `bg-[url("/images/miniContactPattern.png")] md:bg-none bg-right bg-no-repeat`,
                        )}
                    >
                        <div className="mt-7.75 flex md:hidden items-center justify-center">
                            <a
                                href="https://book.housecallpro.com/book/JD-Carpet-Cleaning/33f42e0783124ccabd67d76c7940b7b2?v2=true&fbclid=PAVERFWAQvW9xleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaetpnX6Tnw6cfc6RaxIY2nd5MqhVXNJXlesf62Zf4hmu-lz29u_XqrXQqBBxw_aem_ikpqsf8O91oFZlEiVrUCng"
                                target="_blank"
                            >
                                <Button variant="primary" icon={"arrow"}>
                                    Get a Free Quote Today
                                </Button>
                            </a>
                        </div>

                        <div data-aos="slide-up" style={{ overflow: "hidden" }}>
                            <img
                                src="/images/cleaner.png"
                                alt="cleaning tools"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
