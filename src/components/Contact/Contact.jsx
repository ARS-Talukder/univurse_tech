import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
} from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    // Send Email
    const sendMail = async (event) => {
        event.preventDefault();

        setSending(true);
        setStatus(null);

        if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
            setStatus({
                type: "error",
                message: "Contact form is not configured yet. Please email us directly.",
            });

            setSending(false);
            return;
        }

        try {
            await emailjs.sendForm(
                emailServiceId,
                emailTemplateId,
                event.target,
                emailPublicKey
            );

            event.target.reset();

            setStatus({
                type: "success",
                message: "Message sent successfully. We will get back to you soon.",
            });
        } catch {
            setStatus({
                type: "error",
                message: "Failed to send the message. Please email us directly or try again.",
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-24 overflow-hidden bg-slate-900/40">
            <div className="container mx-auto px-5">

                {/* Section Header */}

                <motion.div
                    className="max-w-4xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Let's Build Something{" "}
                        <span className="gradient-text">
                            Great Together
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Need a website, mobile app, enterprise solution, or digital
                        marketing support? Tell us what you need, and let's build the
                        right solution together.
                    </motion.p>
                </motion.div>

                {/* Contact Content */}

                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6">

                    {/* Contact Information */}

                    <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 relative overflow-hidden">

                        {/* Background Glow */}

                        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl" />

                        <div className="relative z-10">

                            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                                Start a Conversation
                            </span>

                            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-100">
                                Need Something Built?
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                Whether you need a new digital product,
                                want to improve an existing system, or
                                need help growing your online presence,
                                we're ready to talk.
                            </p>

                            {/* Contact Details */}

                            <div className="mt-10 space-y-4">

                                {/* Email */}

                                <a
                                    href="mailto:univurse.tech@gmail.com"
                                    className="group flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <FiMail className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            Email
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                                            univurse.tech@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* Phone */}

                                <a
                                    href="tel:+8801845503651"
                                    className="group flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <FiPhone className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            Phone
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                                            +880 1845 503651
                                        </p>
                                    </div>
                                </a>

                                {/* WhatsApp */}

                                <a
                                    href="https://wa.me/8801845503651"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <FaWhatsapp className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            WhatsApp
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                                            +880 1845 503651
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}

                                <a
                                    href="https://www.linkedin.com/company/univurse-tech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <FaLinkedin className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            LinkedIn
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                                            Univurse Tech
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}

                                <div className="group flex items-center gap-4">
                                    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300">
                                        <FiMapPin className="w-5 h-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            Location
                                        </p>

                                        <p className="mt-1 text-sm text-slate-300">
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom */}

                            <div className="mt-6 pt-2 border-t border-slate-800">
                                <p className="text-xs leading-6 text-slate-500">
                                    We usually respond within 12 hours.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="lg:col-span-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8">

                        <form
                            onSubmit={sendMail}
                            className="space-y-5"
                        >

                            {/* Name + Email */}

                            <div className="grid sm:grid-cols-2 gap-5">

                                {/* Name */}

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-xs font-medium text-slate-400"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                                    />
                                </div>

                                {/* Email */}

                                <div>
                                    <label
                                        htmlFor="user_email"
                                        className="block mb-2 text-xs font-medium text-slate-400"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                                    />
                                </div>

                            </div>

                            {/* Subject */}

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-xs font-medium text-slate-400"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What can we help you with?"
                                    required
                                    className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-xs font-medium text-slate-400"
                                >
                                    Project Details
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="7"
                                    placeholder="Tell us about your project, goals, or requirements..."
                                    required
                                    className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5 text-sm leading-6 text-slate-200 placeholder:text-slate-600 outline-none resize-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                                />
                            </div>

                            {/* Submit */}

                            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

                                {status && (
                                    <p
                                        role="status"
                                        className={`text-sm leading-6 ${status.type === "success"
                                            ? "text-emerald-400"
                                            : "text-red-400"
                                            }`}
                                    >
                                        {status.message}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                                >
                                    {sending
                                        ? "Sending..."
                                        : "Send Message"}

                                    {!sending && (
                                        <FiSend className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                    )}
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
