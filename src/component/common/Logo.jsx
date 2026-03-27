const Logo = () => {
    return (
        <div className="flex items-center justify-center gap-2 w-fit">
            <img src="/images/logo.png" alt=" J&D logo" className="w-11 h-11" />
            <p className="font-poltawski font-bold text-sm md:text-[20px] text-grey-darker  tracking-[-0.5px]">
                J&D Carpet Cleaning
            </p>
        </div>
    );
};

export default Logo;
