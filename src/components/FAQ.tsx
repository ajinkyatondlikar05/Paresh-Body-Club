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
          <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
            Cleared Doubts
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light">
            Got questions about timing buffers, trainer certifications, or entry routines? Here are rapid breakdowns.
          </p>
        </div>

        {/* Collapsible Accordions layout */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-[#0f0f12] border-red-500/30 shadow-[0_4px_25px_rgba(239,68,68,0.05)]" 
                    : "bg-[#09090b] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger Button Layout */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle size={18} className={`shrink-0 ${isOpen ? "text-red-500" : "text-stone-400"}`} />
                    <span className="font-display font-black text-white text-xs sm:text-sm uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-stone-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content with framer-motion smooth collapse layout */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-5 border-t border-white/5 pt-4 text-stone-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
