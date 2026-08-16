import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

const Header = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Services", href: "/#services" },
        { name: "Our Products", href: "/#products" },
        { name: "Tech Stack", href: "/#tech" },
        { name: "About Us", href: "/#about" },
    ];
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <div className="container h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Univurse Tech"
                        className="h-14 w-auto"
                    />

                    <div>
                        <h3>Univurse Tech</h3>
                        <p className="text-xs text-slate-400 tracking-widest uppercase">
                            Software Solutions
                        </p>
                    </div>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-cyan-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Button */}
                <a
                    href="/#contact"
                    className="hidden lg:block primary-btn"
                >
                    Contact Us →
                </a>

                {/* Mobile Button */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-slate-900 border-t border-slate-800">
                    <div className="container py-5 flex flex-col gap-5">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-slate-300 hover:text-cyan-400"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a href="/#contact" className="primary-btn">
                            Contact Us →
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
