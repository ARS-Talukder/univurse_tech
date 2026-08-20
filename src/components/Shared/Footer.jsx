import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [];

    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <div className="container mx-auto px-5">

                {/* =========================
                    Main Footer
                ========================= */}

                <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">

                    {/* =========================
                        Company
                    ========================= */}

                    <div className="lg:col-span-1">

                        <a
                            href="/"
                            className="inline-block"
                        >
                            <h3 className="text-2xl font-bold tracking-tight text-slate-100">
                                Univurse{" "}
                                <span className="text-cyan-400">
                                    Tech
                                </span>
                            </h3>
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                            We build thoughtful digital experiences
                            and technology solutions that help
                            businesses grow, connect, and move forward.
                        </p>

                        {/* Social Links */}

                        {socialLinks.length > 0 && (
                            <div className="mt-6 flex items-center gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-500 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        )}

                    </div>

                    {/* =========================
                        Quick Links
                    ========================= */}

                    <div>

                        <h4 className="text-sm font-semibold text-slate-100">
                            Quick Links
                        </h4>

                        <ul className="mt-5 space-y-3">

                            <li>
                                <a
                                    href="/#about"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#tech"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#team"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Our Team
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#faq"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    FAQ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#contact"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* =========================
                        Services
                    ========================= */}

                    <div>

                        <h4 className="text-sm font-semibold text-slate-100">
                            Services
                        </h4>

                        <ul className="mt-5 space-y-3">

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Web Development
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Mobile App Development
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Enterprise Products
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Digital Marketing
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    UX Design
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* =========================
                        Contact
                    ========================= */}

                    <div>

                        <h4 className="text-sm font-semibold text-slate-100">
                            Get in Touch
                        </h4>

                        <div className="mt-5 space-y-4">

                            {/* Email */}

                            <a
                                href="mailto:univurse.tech@gmail.com"
                                className="group flex items-start gap-3"
                            >
                                <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                                <span className="text-sm text-slate-400 transition-colors group-hover:text-cyan-400">
                                    contact@univursetech.pro.bd
                                </span>
                            </a>

                            {/* Phone */}

                            <a
                                href="tel:+8801845503651"
                                className="group flex items-start gap-3"
                            >
                                <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                                <span className="text-sm text-slate-400 transition-colors group-hover:text-cyan-400">
                                    +880 1845 503651
                                </span>
                            </a>

                            {/* WhatsApp */}

                            <a
                                href="https://wa.me/8801845503651"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-3"
                            >
                                <FaWhatsapp className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                                <span className="text-sm text-slate-400 transition-colors group-hover:text-cyan-400">
                                    +880 1845 503651
                                </span>
                            </a>

                            {/* Location */}

                            <div className="flex items-start gap-3">
                                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                                <span className="text-sm text-slate-400">
                                    Dhaka, Bangladesh
                                </span>
                            </div>

                        </div>

                        {/* CTA */}

                        <a
                            href="/#contact"
                            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                            Start a Conversation

                            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                    </div>

                </div>

                {/* =========================
                    Bottom
                ========================= */}

                <div className="flex flex-col gap-4 border-t border-slate-800 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-slate-500">
                        © {currentYear} Univurse Tech. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">

                        <Link
                            to="/privacy-policy"
                            className="text-slate-500 transition-colors hover:text-cyan-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms-and-conditions"
                            className="text-slate-500 transition-colors hover:text-cyan-400"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
