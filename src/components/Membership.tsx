import { Info, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

const DumbbellIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" className="text-red-500 fill-current shrink-0 inline-block align-middle">
    {/* Bar */}
    <rect x="2" y="10.5" width="20" height="3" rx="1" />
    {/* Left Inner Plate */}
    <rect x="6" y="5" width="2.5" height="14" rx="1" />
    {/* Left Outer Plate */}
    <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
    {/* Right Inner Plate */}
    <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
    {/* Right Outer Plate */}
    <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
  </svg>
);

const MEMBERSHIP_ROWS = [
  { no: 1, months: "1 MONTH", gym: "₹ 700", gymCardio: "₹ 900" },
  { no: 2, months: "3 MONTHS", gym: "₹ 1800", gymCardio: "₹ 2400" },
  { no: 3, months: "6 MONTHS", gym: "₹ 3000", gymCardio: "₹ 4200" },
  { no: 4, months: "1 YEAR", gym: "₹ 5400", gymCardio: "₹ 7200" }
];

const RULES = [
  "Fees once paid will not be refunded back or transfer to other person.",
  "All the rules & regulations of the gymnasium should be strictly followed.",
  "Fees should be paid strictly on time.",
  "Gymnasium authorities will not take any responsibility if any injury is caused.",
  "We are not responsible for your valuable things."
];

export default function Membership() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const tableBodyVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut"
      }
    }
  };

  const rulesContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const ruleItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="membership" 
      className="py-20 sm:py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Subtle red smoke/embers background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Red ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-red-650/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[140px]" />
        
        {/* Drifting smoke effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 -left-10 w-96 h-96 bg-stone-900/10 blur-[60px] rounded-full animate-smoke-slow" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-stone-900/10 blur-[60px] rounded-full animate-smoke-slow" style={{ animationDelay: "-9s" }} />
        </div>

        {/* Embers */}
        <div className="absolute bottom-0 inset-x-0 h-1/2">
          <div className="absolute left-[15%] w-[1.5px] h-[1.5px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-1" />
          <div className="absolute left-[40%] w-[2px] h-[2px] bg-red-600 rounded-full blur-[0.5px] animate-ember-cinematic-2" style={{ animationDelay: "-4s" }} />
          <div className="absolute left-[70%] w-[1px] h-[1px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-3" style={{ animationDelay: "-8s" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto"
        >
          
          {/* LEFT CARD: GYM MEMBERSHIP DETAILS */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0e0e11]/85 backdrop-blur-md border border-red-500/20 rounded-2xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_15px_rgba(239,68,68,0.05)]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <DumbbellIcon />
                <h3 className="font-display font-black text-lg sm:text-2xl text-white uppercase tracking-tight text-center">
                  GYM MEMBERSHIP <span className="text-red-500">DETAILS</span>
                </h3>
                <DumbbellIcon />
              </div>

              {/* Table wrapper to prevent overflow */}
              <div className="overflow-x-auto rounded-xl border border-white/10 scrollbar-none">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white font-display text-[10px] sm:text-sm tracking-wider uppercase border-b border-white/10">
                      <th className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-bold border-r border-white/10 w-10">No</th>
                      <th className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-bold border-r border-white/10">Months</th>
                      <th className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-bold border-r border-white/10">Gym</th>
                      <th className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-bold">Gym + Cardio</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    variants={tableBodyVariants}
                    className="divide-y divide-white/10 font-sans text-[11px] sm:text-sm text-stone-200"
                  >
                    {MEMBERSHIP_ROWS.map((row) => (
                      <motion.tr 
                        key={row.no} 
                        variants={rowVariants}
                        className="hover:bg-white/5 transition-colors duration-150"
                      >
                        <td className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-display font-bold text-red-500 border-r border-white/10">{row.no}</td>
                        <td className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-semibold border-r border-white/10 text-stone-100">{row.months}</td>
                        <td className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-semibold border-r border-white/10 text-stone-100">{row.gym}</td>
                        <td className="py-2.5 px-1 sm:py-3.5 sm:px-4 text-center font-semibold text-stone-100">{row.gymCardio}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </div>

            {/* Footer note */}
            <div className="flex items-start gap-2 mt-6 px-1 text-stone-400 text-[10px] sm:text-xs text-left leading-relaxed">
              <Info size={14} className="text-red-500 shrink-0 mt-0.5" />
              <span>All plans include access to world-class equipment and expert guidance.</span>
            </div>
          </motion.div>

          {/* RIGHT CARD: RULES & REGULATIONS */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0e0e11]/85 backdrop-blur-md border border-red-500/20 rounded-2xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_15px_rgba(239,68,68,0.05)]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 w-full mb-6">
                <ClipboardList className="text-red-500 shrink-0" size={26} />
                <h3 className="font-display font-black text-lg sm:text-2xl text-white uppercase tracking-tight whitespace-nowrap">
                  RULES <span className="text-red-500">& REGULATIONS</span>
                </h3>
                <div className="h-[2px] bg-red-600/80 flex-grow rounded-full max-w-[80px]" />
              </div>

              {/* Rules list */}
              <motion.div 
                variants={rulesContainerVariants}
                className="flex flex-col"
              >
                {RULES.map((rule, index) => (
                  <motion.div 
                    key={index} 
                    variants={ruleItemVariants}
                    className="relative py-3 sm:py-4 flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-red-600 flex items-center justify-center shrink-0 font-display font-bold text-white shadow-[0_0_10px_rgba(239,68,68,0.5)] text-xs sm:text-sm">
                      {index + 1}
                    </div>
                    <p className="text-stone-300 text-[11px] sm:text-sm leading-relaxed text-left flex-grow">
                      {rule}
                    </p>

                    {/* Divider line with center dot */}
                    {index < RULES.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none">
                        <div className="h-[1px] bg-white/10 w-full" />
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/20" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Empty space/balance for side-by-side flex layout */}
            <div className="h-0 md:h-6" />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
