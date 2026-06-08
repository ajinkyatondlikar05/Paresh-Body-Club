import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-red-600/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0, textShadow: "0 0 15px rgba(239,68,68,0.4)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2"
          >
            Cleared Doubts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight"
          >
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light"
          >
            Got questions about timing buffers, trainer certifications, or entry routines? Here are rapid breakdowns.
          </motion.p>
        </div>

        {/* Collapsible Accordions layout */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
                }}
                whileHover={{ y: -4, borderColor: "rgba(239, 68, 68, 0.4)", boxShadow: "0 10px 30px rgba(239,68,68,0.15)", transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={`border rounded-xl transition-colors duration-200 overflow-hidden ${isOpen
                    ? "bg-[#0f0f12] border-red-500/40 shadow-[0_4px_25px_rgba(239,68,68,0.15)]"
                    : "bg-[#09090b] border-white/5"
                  }`}
              >
                {/* Accordion Trigger Button Layout */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <motion.div
                      animate={isOpen ? {
                        filter: ["drop-shadow(0 0 2px rgba(239,68,68,0.2))", "drop-shadow(0 0 10px rgba(239,68,68,0.8))", "drop-shadow(0 0 2px rgba(239,68,68,0.2))"]
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <HelpCircle size={18} className={`shrink-0 transition-colors duration-200 ${isOpen ? "text-red-500" : "text-stone-400"}`} />
                    </motion.div>
                    <span className={`font-display font-black text-xs sm:text-sm uppercase tracking-wide transition-colors duration-200 ${isOpen ? "text-white" : "text-stone-200"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    className={`shrink-0 ${isOpen ? "text-red-500" : "text-stone-500"}`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Accordion Content with framer-motion smooth collapse layout */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-5 border-t border-white/5 pt-4 text-stone-400 font-sans text-xs sm:text-sm leading-relaxed font-light whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
