import { FaCode, FaCloud, FaCogs} from "react-icons/fa";
export const Services = () => {
    return (
        <section className="relative py-16  text-white font-montserrat">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#0074d9] text-glow">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
                    At Clemens Digital, we are passionate about helping businesses succeed by providing tailored digital solutions. Whether you need a custom-built website, a robust software platform, or a unique solution to meet your specific needs, we are here to help. Explore our services below to see how we can bring your vision to life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Website Development */}
                    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#0074d9] rounded-full flex items-center justify-center">
                            <FaCode className="w-12 h-12"/>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0074d9]">Custom Website Development</h3>
                        <p className="text-base mt-4 text-gray-300">
                            Your website is the digital face of your business. We specialize in creating modern, responsive, and user-friendly websites that are tailored to your unique needs. We understand that crafting the right website is not just about looking good—it’s about delivering value and driving conversions. Whether it’s a simple navigation menu or an engaging landing page with clear messaging, we ensure your site feels professional and complements your business.
                        </p>
                        <p className="mt-4 text-sm italic text-gray-400">
                            Our process includes consultation, design, development, and hosting to ensure your website evolves with your business.
                        </p>
                    </div>

                    {/* PaaS Solutions */}
                    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#0074d9] rounded-full flex items-center justify-center">
                            <FaCloud className="w-12 h-12"/>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0074d9]">Platform as a Service (PaaS)</h3>
                        <p className="text-base mt-4 text-gray-300">
                            We develop and offer software solutions as a service, bundled with hardware for seamless integration. For example, our upcoming invoicing platform, Invoicia360, is a versatile software solution that powers seamless hardware integration, designed for small businesses. It’s multilingual and market-driven, making it ideal for those who prefer affordable or localized solutions. With Docker-based functionality and no internet requirements, Invoicia360 delivers efficient financial management tools directly into your operations.
                        </p>
                        <p className="mt-4 text-sm italic text-gray-400">
                            Our PaaS solutions are scalable, secure, and customizable to meet the unique demands of your business.
                        </p>
                    </div>

                    {/* Custom Software Development */}
                    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#0074d9] rounded-full flex items-center justify-center">
                            <FaCogs className="w-12 h-12"/>
                        </div>
                        <h3 className="text-2xl font-bold text-[#0074d9]">Custom Software Development</h3>
                        <p className="text-base mt-4 text-gray-300">
                            We specialize in crafting custom software solutions tailored to your unique requirements. From basic functionality to cutting-edge, our team has all you need for your vision. Our team is dedicated to delivering specialized, functional software designed to solve specific problems efficiently. As a small company like ours, we understand that complexity matters, but don't shy away from challenges. We can create solutions that are easy to run yet powerful enough to handle complex issues. Let’s work together to bring your goals to reality!
                        </p>
                        <p className="mt-4 text-sm italic text-gray-400">
                            Our expertise includes Java, Python, SQL, and scripting languages. Contact us to discuss your project and see how we can help!
                        </p>
                    </div>
                </div>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mt-12 leading-relaxed text-gray-300">
                    Ready to take your business to the next level? <a href="#contact" className="text-[#0074d9] font-bold hover:underline cursor-pointer">Contact us</a> today to learn more about how Clemens Digital can help you achieve your goals.
                </p>
            </div>
        </section>
    );
};
