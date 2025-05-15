import Anthony from '@/assets/anthony.jpg';
import Marissa from '@/assets/marissa.jpg';
export const AboutUs = () => {
    return (
        <section className="relative py-16  text-white font-montserrat">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#0074d9] text-glow">
                    Meet Us
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
                    Hi there! We're Anthony and Marissa Clemens, a husband-and-wife duo passionate about crafting beautiful websites and innovative software. 
                    Based in Plant City, Florida, we love working with small businesses to bring their ideas to life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Anthony's Section */}
                    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0074d9]">
                            <img src={Anthony} alt="Anthony" className="object-cover w-full h-full"></img>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0074d9] text-glow">Anthony Clemens</h3>
                        <p className="text-base mt-4 text-gray-300">
                            Lead Software Engineer, graduate of Saint Petersburg College.
                        </p>
                        <p className="mt-4 text-sm italic text-gray-400">
                            "I love solving complex problems with clean code. When I'm not coding, you'll find me sim racing or exploring new tech!"
                        </p>
                        <a
                            href="https://github.com/AnthonyClemens"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0074d9] hover:underline mt-2 block"
                        >
                            Check out my GitHub
                        </a>
                    </div>

                    {/* Marissa's Section */}
                    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0074d9]">
                            <img src={Marissa} alt="Marissa" className="object-cover w-full h-full"></img>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0074d9] text-glow">Marissa Clemens</h3>
                        <p className="text-base mt-4 text-gray-300">
                            UI/UX Designer, graduate of Western Governors University.
                        </p>
                        <p className="mt-4 text-sm italic text-gray-400">
                            "Designing intuitive and beautiful user experiences is my passion. When I'm not designing, I enjoy diving into a good book!"
                        </p>
                        <a
                            href="https://github.com/mclemens817"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0074d9] hover:underline mt-2 block"
                        >
                            Check out my GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
