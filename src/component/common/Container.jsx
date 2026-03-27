import React from "react";
import { cn } from "../../lib/utils";

const Container = ({
    children,
    className = "",
    size = "lg",
    padding = true,
}) => {
    // Max-width sizes
    const sizeClasses = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-screen-2xl",
        full: "max-w-full",
    };

    return (
        <div
            className={cn(
                "mx-auto w-full",
                sizeClasses[size],
                padding && "px-4 sm:px-6 lg:px-8",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;
