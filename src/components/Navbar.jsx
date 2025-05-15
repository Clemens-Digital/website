import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 relative transition-all duration-300 z-10",
                isScrolled ? "sticky top-0" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between bg-background/80">
                <a
                    className="text-xl md:text-4xl sm:text-5xl text-primary flex items-center w-300 "
                    href="#hero"
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="mr-2"
                        style={{ width: "48px", height: "48px" }}
                    />
                    <span className="relative text-white hover:text-[#0074d9] transition-colors duration-300 text-glow font-basis33 backdrop-blur-md bg-background/80">
                        Clemens Digital
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-5 font-basis33 text-2xl justify-end backdrop-blur-md bg-background/80">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-white hover:text-[#0074d9] transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="flex md:hidden p-2 text-foreground z-50 backdrop-blur-md bg-background/80"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={64} color="#ffffff" /> : <Menu size={64} color="#ffffff"/>}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-6xl font-basis33">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-white hover:text-[#0074d9] transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};