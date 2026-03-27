import { cn } from "../../lib/utils";

const Button = ({
    children,
    variant = "primary",
    size = "default",
    className = "",

    ...props
}) => {
    return (
        <button
            className={cn(
                // Base styles
                `inline-flex rounded-[1.875rem] items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-["0px 4px 20.3px 0px #00000040"]`,

                // Variants
                variant === "primary" &&
                    "bg-blue-600 hover:bg-blue-700 text-white focus-visible:ring-blue-600",
                variant === "secondary" &&
                    "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 focus-visible:ring-gray-500",
                variant === "outline" &&
                    "border border-gray-300 hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-500",

                // Sizes
                size === "default" && "h-11 px-6 text-base",
                size === "sm" && "h-9 px-4 text-sm",
                size === "lg" && "h-12 px-8 text-lg",

                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
