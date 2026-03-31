import React from "react";
import { cn } from "../../lib/utils";

const Container = ({
    children,
    className = "",
    size = "custom_1",
    padding = true,
}) => {
    // Max-width sizes
    const sizeClasses = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-screen-2xl",
        full: "max-w-full",
        custom_1: ":max-w-[93.75rem]",
    };

    return (
        <div
            className={cn(
                "mx-auto w-full max-w-11/12 md:max-w-[93.75rem]",
                sizeClasses[size],
                padding && "px-4 sm:px-8 lg:px-10",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;
