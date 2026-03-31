import { IoCallOutline } from "react-icons/io5";
import { cn } from "../../lib/utils";
import { LiaArrowRightSolid } from "react-icons/lia";

const Button = ({
    children,
    variant = "base",
    className = "",
    icon,
    isInverse,
    ...props
}) => {
    return (
        <button
            className={cn(
                // Base styles
                `flex  md:flex-row cursor-pointer rounded-[1.875rem] items-center justify-center gap-2 md:font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-["0px 4px 20.3px 0px #00000040"] md:text-[0.9375rem] py-2.5 md:py-3.5 p-3 md:px-6 text-xs font-bold `,

                // Variants
                variant === "base" && "bg-white text-blue-normal",
                variant === "primary" &&
                    "bg-blue-normal hover:bg-blue-normal/80 text-white focus-visible:ring-0",
                variant === "secondary" &&
                    "bg-transparent border bg-blend-lighten border-white hover:bg-gray-50 text-gray-700 focus-visible:ring-gray-500",

                variant === "outline" &&
                    "bg-white/20 border  border-white hover:bg-gray-50 text-white hover:bg-white/50",

                // Sizes
                // size === "default" && "h-11 px-6 text-base",
                // size === "sm" && "h-9 px-4 text-sm",
                // size === "lg" && "h-12 px-8 text-lg",

                className,
                isInverse && "flex-row-reverse",
            )}
            {...props}
        >
            {icon && (
                <>
                    {icon === "phone" && (
                        <div className="size-5  md:size-7 rounded-full flex items-center justify-center text-xs md:text-base bg-blue-normal">
                            <IoCallOutline className="text-white" />
                        </div>
                    )}

                    {icon === "arrow" && (
                        <div className="size-5  md:size-7 rounded-full flex items-center justify-center text-xs md:text-base bg-white">
                            <LiaArrowRightSolid className="text-blue-normal" />
                        </div>
                    )}
                </>
            )}
            {children}
        </button>
    );
};

export default Button;
