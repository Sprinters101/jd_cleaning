import Container from "../common/Container";

const Hero = () => {
    return (
        <div className="">
            <Container padding>
                <div
                    className={`bg-[url("/images/hero.png")] bg-cover md:bg-center  bg-no-repeat h-149.25 rounded-[2.5rem]  md:h-228.25 flex items-center px-6 md:px-16`}
                >
                    <div className="">
                        <img
                            src="/images/googleRate.png"
                            alt="google rate"
                            className="w-53.75"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
