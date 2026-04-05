import React, { useState, useEffect } from "react";

import { cn } from "../../lib/utils";
import Container from "./Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import AnimatedSection from "../animation/AnimatedSection";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Services", href: "#services", id: "services" },
        { name: "About Us", href: "#about", id: "about" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // Smooth scroll handler
    const handleNavClick = (e, href, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // navbar height offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - bodyRect - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
        setActiveSection(id);
    };

    // Active section detection on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-80px 0px -50% 0px",
            },
        );

        navLinks.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* Main Navbar */}
            <nav className="bg-white sticky top-0 z-50">
                <Container>
                    <div className="flex items-center justify-between h-18 md:h-24">
                        {/* Logo */}
                        {/* <Logo /> */}

                        <Logo />

                        {/* Desktop Navigation with Active Dot */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href, link.id)
                                    }
                                    className={cn(
                                        "relative leading-[100%]  font-poppins font-normal text-[0.9375rem] transition-colors pb-1 group text-grey",
                                        activeSection === link.id &&
                                            "text-blue-normal font-bold",
                                    )}
                                >
                                    {link.name}

                                    {/* Active Dot Indicator */}
                                    <span
                                        className={cn(
                                            "absolute block bottom-0 left-1/2 -translate-x-1/2 w-1.75 h-1.75 rounded-full bg-blue-normal transition-all duration-200",
                                            activeSection === link.id
                                                ? "opacity-100 "
                                                : "opacity-0 scale-0 group-hover:opacity-30 ",
                                        )}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Desktop Right Side */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+18316826739"
                                className="transition-colors"
                            >
                                <Button icon={"phone"}>(831) 682-6739</Button>
                            </a>
                            <a
                                href="https://book.housecallpro.com/book/JD-Carpet-Cleaning/33f42e0783124ccabd67d76c7940b7b2?v2=true&fbclid=PAVERFWAQvW9xleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaetpnX6Tnw6cfc6RaxIY2nd5MqhVXNJXlesf62Zf4hmu-lz29u_XqrXQqBBxw_aem_ikpqsf8O91oFZlEiVrUCng"
                                target="_blank"
                            >
                                <Button
                                    variant="primary"
                                    className="px-8"
                                    icon={"arrow"}
                                >
                                    Book us Now
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => toggleNav()}
                            className="md:hidden bg-blue-normal rounded-full  w-7 h-7 justify-center items-center flex text-white"
                            aria-label="Open menu"
                        >
                            {isOpen ? (
                                <IoClose className="text-lg" />
                            ) : (
                                <HiMenu className="text-lg" />
                            )}
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Bottom Slide-up Drawer for Mobile */}
            {isOpen && (
                <div className="fixed top-18 w-full max-w-[18.4375rem]  h-fit inset-0 bg-white z-60 md:hidden flex flex-col">
                    {/* Header with Logo and Close Button */}

                    {/* Navigation Links */}
                    <div className=" flex flex-col px-6 gap-4 text-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(e, link.href, link.id)
                                }
                                className={cn(
                                    "py-3 font-medium transition-colors text-[0.9375rem]",
                                    activeSection === link.id
                                        ? "text-blue-normal font-bold"
                                        : "text-grey",
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6  space-y-4">
                        <a
                            href="https://book.housecallpro.com/book/JD-Carpet-Cleaning/33f42e0783124ccabd67d76c7940b7b2?v2=true&fbclid=PAVERFWAQvW9xleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaetpnX6Tnw6cfc6RaxIY2nd5MqhVXNJXlesf62Zf4hmu-lz29u_XqrXQqBBxw_aem_ikpqsf8O91oFZlEiVrUCng"
                            target="_blank"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full py-1.5 rounded-full flex items-center justify-center gap-2"
                                onClick={() => setIsOpen(false)}
                                icon={"arrow"}
                                isInverse={true}
                            >
                                Book us Now
                            </Button>
                        </a>

                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="tel:+18316826739"
                                className="transition-colors"
                            >
                                <Button icon={"phone"}>(831) 682-6739</Button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

// {isOpen && (
//     <div className="fixed inset-0 z-60 md:hidden">
//         {/* Backdrop */}
//         <div
//             className="absolute inset-0 bg-black/60"
//             onClick={() => setIsOpen(false)}
//         />

//         {/* Drawer */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-auto shadow-2xl">
//             <div className="p-6">
//                 {/* Handle */}
//                 <div className="flex justify-center mb-8">
//                     <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
//                 </div>

//                 {/* Logo */}
//                 <div className="flex items-center gap-3 mb-10">
//                     <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
//                         J&D
//                     </div>
//                     <div>
//                         <span className="font-bold text-2xl">
//                             J&D
//                         </span>
//                         <p className="text-gray-500 -mt-1">
//                             Carpet Cleaning
//                         </p>
//                     </div>
//                 </div>

//                 {/* Mobile Links */}
//                 <div className="flex flex-col gap-2 mb-12">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.name}
//                             href={link.href}
//                             onClick={(e) =>
//                                 handleNavClick(
//                                     e,
//                                     link.href,
//                                     link.id,
//                                 )
//                             }
//                             className={cn(
//                                 "py-4 px-5 text-lg font-medium rounded-2xl transition-all",
//                                 activeSection === link.id
//                                     ? "bg-blue-50 text-blue-700"
//                                     : "hover:bg-gray-100 text-gray-700",
//                             )}
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Contact & CTA */}
//                 <div className="space-y-4">
//                     <a
//                         href="tel:+18316826739"
//                         className="flex items-center justify-center gap-3 bg-blue-50 hover:bg-blue-100 text-blue-700 py-4 rounded-2xl font-semibold text-lg transition-colors"
//                     >
//                         📞 Call (831) 682-6739
//                     </a>

//                     <Button
//                         variant="primary"
//                         size="lg"
//                         className="w-full py-4 text-lg"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         Book Now
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )}
