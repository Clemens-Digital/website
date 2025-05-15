export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white font-montserrat">
            <div className="container mx-auto z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Empowering Small Businesses
                    <br />
                    <span className="text-[#0074d9] text-glow">Websites & Software Solutions</span>
                </h1>
                <p className="mt-6 text-2xl font-light max-w-2xl mx-auto drop-shadow-md text-[#ffffff]">
                    We specialize in crafting stunning websites and building custom software to help your business thrive in the digital age.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#services"
                        className="px-8 py-4 text-lg font-semibold bg-[#0074d9] text-[#ffffff] rounded-full shadow-md hover:shadow-lg hover:bg-[#005bb5] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Explore Our Services
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 text-lg font-semibold bg-[#ffdc00] text-[#333333] rounded-full shadow-md hover:shadow-lg hover:bg-[#e6c800] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};