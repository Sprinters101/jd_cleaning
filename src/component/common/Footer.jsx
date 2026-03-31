import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Text from "./Text";
import { LuFacebook } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const Footer = () => {
    return (
        <div>
            <Container className="">
                <div className="border-t border-t-blue-light-active" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-20 pt-8 pb-10 gap-6 ">
                    <div className="">
                        <Logo />
                        <Text
                            className="mt-5.5 w-96.75 text-grey"
                            variant="b3_regular"
                        >
                            {footerData?.company?.description}
                        </Text>
                        <div className="flex gap-5 mt-5.5">
                            {footerData.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block size-8 rounded-full overflow-hidden bg-blue-normal text-white isCentered"
                                >
                                    {social?.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <Text className="font-semibold text-blue-normal text-[19px] mb-4">
                                Services
                            </Text>

                            <div className="flex flex-col gap-4 mt-6">
                                {footerData.services.map((service, index) => (
                                    <a
                                        key={index}
                                        href="#services"
                                        className="text-grey hover:text-blue-600 transition-colors duration-200 text-[15px]"
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <Text className="font-semibold text-blue-normal text-[19px] mb-4">
                                Company
                            </Text>

                            <div className="flex flex-col gap-3">
                                {footerData.companyLinks.map(
                                    (service, index) => (
                                        <a
                                            key={index}
                                            href="#jdkd"
                                            className="text-grey hover:text-blue-600 transition-colors duration-200 text-[15px]"
                                        >
                                            {service}
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <Text variant="c1" className="py-8 text-center text-grey">
                    {footerData.copyright}
                </Text>
            </Container>
        </div>
    );
};

export default Footer;

const footerData = {
    company: {
        name: "J&D Carpet Cleaning",
        description:
            "Transforming spaces in Salinas, CA since our beginning. Professional, family-owned, and dedicated to your home's health.",
    },

    services: [
        "Carpet Cleaning",
        "Upholstery Care",
        "Tile & Grout",
        "Rug Cleaning",
    ],

    companyLinks: ["Our Story", "Contact Us"],

    contact: {
        phone: "(831) 682-6739",
        email: "carpetcleaningjyd@gmail.com",
    },

    social: [
        {
            name: "Facebook",
            icon: <LuFacebook />,
            url: "https://www.facebook.com/profile.php?id=61585853841986",
        },
        {
            name: "Instagram",
            icon: <PiTiktokLogo />,
            url: "https://www.tiktok.com/@jdcarpet.cleaning",
        },
        {
            name: "Twitter",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/jd__carpetcleaning?igsh=MW5mb2FydThka2lpcw==",
        },
        {
            name: "Twitter",
            icon: <SiGoogle />,
            url: "https://g.page/r/CWSN5iO0B93HEBE/review",
        },
    ],

    copyright: `© ${new Date()?.getFullYear()} J&D Carpet Cleaning. Proudly serving Salinas, CA. Built on a legacy of master craftsmanship and textile preservation.`,
};
