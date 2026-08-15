import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
} from "react-icons/fi";

const Contact = () => {
    const [sending, setSending] = useState(false);

    // =========================
    // Send Email
    // =========================

    const sendMail = async (event) => {
        event.preventDefault();

        setSending(true);

        try {
            const result = await emailjs.sendForm(
                "service_u7470p9",
                "template_jwtn2kd",
                event.target,
                "7WU59zuk4z2MC1HSv"
            );

            console.log("Email sent:", result.text);

            event.target.reset();

            alert("Message sent successfully!");
        } catch (error) {
            console.error("EmailJS Error:", error);

            alert(
                "Failed to send the message. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-24 overflow-hidden bg-slate-900/40">
            <div className="container mx-auto px-5">

                {/* Section Header */}

                <div className="max-w-3xl mx-auto text-center mb-16">

                    <span className="section-subtitle">
                        Contact Us
                    </span>

                    <h2>
                        Let's Build Something{" "}
                        <span className="gradient-text">
                            Great Together
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto">
                        Need a website, mobile app, enterprise solution, or digital marketing support?
                        Tell us what you need, and let's build the right solution together.
                    </p>

                </div>

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

                            <div className="mt-10 space-y-5">

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
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom */}

                            <div className="mt-10 pt-6 border-t border-slate-800">
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

                            <div className="flex justify-end pt-2">

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
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