import { cn } from "../../lib/utils";

const Text = ({ children, variant = "p", className = "", ...props }) => {
    const styles = {
        // Headings
        h1: "text-[1.625rem] md:text-[62px] leading-[117%] font-bold ",
        h2: "text-[24px] md:text-[47px] leading-tight font-bold tracking-[-0.5px]",
        h3: "text-[30px] leading-tight font-bold",

        // Body
        b1: "text-[24px] font-semibold",
        b1_bold: "md:text-[43px] text-[24px] font-bold",
        b1_semibold: " text-[15px] md:text-[24px] font-semibold leading-[100%]",
        b2: "text-[19px] font-bold",
        // b2_bold: "text-[19px] font-bold",
        b2_semibold: "text-xs md:text-[19px] font-semibold",
        b2_regular: "text-[10px]  md:text-[19px] font-normal",
        b3: "text-[10px] md:text-[15px] font-semibold",
        b3_regular: "text-[13px] md:text-[15px] font-normal",
        b3_semibold: "text-[15px] font-semibold",

        // Caption
        c1: "text-[12px] font-normal",
        c2: "text-[10px] font-normal",
        c2_regular: "text-[10px] font-normal",

        // Default paragraph
        p: "text-[10px] font-normal leading-relaxed",
    };

    return (
        <p className={cn(styles[variant] || styles.p, className)} {...props}>
            {children}
        </p>
    );
};

export default Text;
