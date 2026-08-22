import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
    return (
        <a
            href="https://wa.me/8801845503651"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-20 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/20 hover:bg-green-400 hover:-translate-y-1 transition-all duration-300"
        >
            {/* Blinking Glow */}
            <span className="absolute inset-0 rounded-xl bg-green-400/40 animate-ping" />

            {/* Soft Pulse */}
            <span className="absolute inset-0 rounded-xl bg-green-400/20 animate-pulse" />

            {/* WhatsApp Icon */}
            <FaWhatsapp className="relative z-10 w-6 h-6" />
        </a>
    );
};

export default WhatsAppChat;