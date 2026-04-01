import React from "react";
// import { motion } from "framer-motion";

const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
    direction = "up", // 'up', 'down', 'left', 'right'
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
