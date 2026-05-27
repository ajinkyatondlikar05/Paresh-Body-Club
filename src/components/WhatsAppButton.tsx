import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const handleClick = () => {
    // Open standard Whatsapp chat link with custom message
    const phoneNumber = "919021468123";
    const message = "Hello PARESH BODY CLUB, I am interested in joining the gym! Please share membership details.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.button
      id="whatsapp-floating-btn"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.85)] cursor-pointer flex items-center justify-center transition-all duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current stroke-none" />
      <span className="absolute right-14 bg-black/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
      <span className="flex h-3 w-3 absolute top-0 right-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </motion.button>
  );
}
