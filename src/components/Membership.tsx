import { Calendar, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

const DumbbellIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" className="text-red-500 fill-current shrink-0">
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

const ShieldStarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0 mx-auto mb-1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12,6 13.5,9.5 17,10 14.5,12.5 15,16 12,14.5 9,16 9.5,12.5 7,10 10.5,9.5" fill="currentColor" stroke="none" />
  </svg>
);

const BarbellIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-red-500 fill-current shrink-0 mx-auto mb-1.5">
    <rect x="2" y="11" width="20" height="2" rx="0.5" />
    <rect x="6" y="7" width="2" height="10" rx="0.5" />
    <rect x="8" y="8" width="1" height="8" rx="0.5" />
    <rect x="15" y="8" width="1" height="8" rx="0.5" />
    <rect x="16" y="7" width="2" height="10" rx="0.5" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0 mx-auto mb-1.5">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M6 10h2l2-3 2 6 2-3h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HexagonNumber = ({ num }: { num: number }) => (
  <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mx-auto select-none pointer-events-none">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-500 stroke-current fill-none stroke-[8]">
      <polygon points="50,4 93,25 93,75 50,96 7,75 7,25" />
    </svg>
    <span className="relative font-display font-black text-white text-xs sm:text-sm z-10">{num}</span>
  </div>
);

const OctagonClipboardIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-500 stroke-current fill-none stroke-[6]">
      <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" />
    </svg>
    <ClipboardList className="relative text-white z-10" size={18} />
  </div>
);

const NoRefundIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
);

const FollowRulesIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TimeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InjuryIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const ValuablesIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-none stroke-current stroke-[2] shrink-0">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BodybuilderBicepsIcon = () => (
  <svg viewBox="0 0 100 100" width="48" height="48" className="text-red-500/80 fill-current shrink-0">
    <path d="M50,18c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S47.2,18,50,18z M32,32c-3-2-7-3-11-2c-4,1-7,4-7,8c0,4,3,6,6,6c2,0,5-1,6-3c2,3,6,4,10,4h4v-8H32z M68,32c3-2,7-3,11-2c4,1,7,4,7,8c0,4,3,6,6,6c-2,0-5-1-6-3c-2,3-6,4-10,4h-4v-8H68z M44,52h12v35H44V52z" />
  </svg>
);

const BodybuilderLifterIcon = () => (
  <svg viewBox="0 0 100 100" width="48" height="48" className="text-red-500/80 fill-current shrink-0">
    <path d="M50,22c2.8,0,5-2.2,5-5s-2.2-5-5-5s-5,2.2-5,5S47.2,22,50,22z M10,48h15c2,0,4-2,4-4v-6h42v6c0,2,2,4,4,4h15c2,0,4-2,4-4s-2-4-4-4H77v-8H23v8H10c-2,0-4,2-4,4S8,48,10,48z M42,52h16v35H42V52z" />
  </svg>
);

const MEMBERSHIP_ROWS = [
  { no: 1, months: "1 MONTH", gym: "₹ 700", gymCardio: "₹ 900" },
  { no: 2, months: "3 MONTHS", gym: "₹ 1800", gymCardio: "₹ 2400" },
  { no: 3, months: "6 MONTHS", gym: "₹ 3000", gymCardio: "₹ 4200" },
  { no: 4, months: "1 YEAR", gym: "₹ 5400", gymCardio: "₹ 7200" }
];

const RULES = [
  { text: "Fees once paid will not be refunded back or transfer to other person.", icon: "cash" },
  { text: "All the rules & regulations of the gymnasium should be strictly followed.", icon: "shield" },
  { text: "Fees should be paid strictly on time.", icon: "clock" },
  { text: "Gymnasium authorities will not take any responsibility if any injury is caused.", icon: "injury" },
  { text: "We are not responsible for your valuable things.", icon: "valuables" }
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

  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case "cash":
        return <NoRefundIcon />;
      case "shield":
        return <FollowRulesIcon />;
      case "clock":
        return <TimeIcon />;
      case "injury":
        return <InjuryIcon />;
      case "valuables":
        return <ValuablesIcon />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="membership" 
      className="py-20 sm:py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Background Elements with subtle red smoke & embers */}
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

        {/* Desktop Gym Bodybuilder Image (Left side background) */}
        <div className="absolute left-0 top-0 bottom-0 w-[45%] hidden lg:block opacity-25 pointer-events-none select-none">
          <img 
            src="/founder-flex.png" 
            alt="Bodybuilder decoration"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c0c0e]/85 to-[#0c0c0e]" />
        </div>

        {/* Mobile Gym Bodybuilder Image (Top background) */}
        <div className="absolute top-0 left-0 w-full h-[320px] lg:hidden opacity-20 pointer-events-none select-none">
          <img 
            src="/founder-flex.png" 
            alt="Bodybuilder mobile decoration"
            className="w-full h-full object-cover object-top filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0e]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slanted Bold Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <div className="flex justify-center mb-3 text-red-500">
            <DumbbellIcon />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-center uppercase tracking-tight italic select-none">
            <span className="text-white block">GYM MEMBERSHIP</span>
            <span className="text-red-500 block -mt-1.5 sm:-mt-2.5">DETAILS</span>
          </h2>
          <p className="text-stone-400 font-sans text-[10px] sm:text-sm text-center uppercase tracking-widest italic mt-3 sm:mt-4 font-bold">
            CHOOSE THE PERFECT PLAN FOR YOUR FITNESS JOURNEY
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto relative z-10"
        >
          
          {/* LEFT CARD: GYM MEMBERSHIP DETAILS TABLE */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0e0e11]/85 backdrop-blur-md border border-red-500/35 rounded-2xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_20px_rgba(239,68,68,0.15)]"
          >
            <div>
              {/* Table wrapper to prevent overflow */}
              <div className="overflow-x-auto rounded-xl border border-white/10 scrollbar-none">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-red-700 text-white font-display text-[10px] sm:text-xs tracking-wider uppercase border-b border-white/10 italic">
                      <th className="py-3 px-1 sm:py-4 sm:px-4 text-center font-bold border-r border-white/10 w-12 sm:w-16">
                        <ShieldStarIcon />
                        <span className="block mt-1">NO.</span>
                      </th>
                      <th className="py-3 px-1 sm:py-4 sm:px-4 text-center font-bold border-r border-white/10">
                        <Calendar size={20} className="text-red-500 shrink-0 mx-auto mb-1.5" />
                        <span>MONTHS</span>
                      </th>
                      <th className="py-3 px-1 sm:py-4 sm:px-4 text-center font-bold border-r border-white/10">
                        <BarbellIcon />
                        <span>GYM</span>
                      </th>
                      <th className="py-3 px-1 sm:py-4 sm:px-4 text-center font-bold">
                        <HeartPulseIcon />
                        <span>GYM + CARDIO</span>
                      </th>
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
                        <td className="py-3.5 px-1 sm:py-4 sm:px-4 text-center border-r border-white/10">
                          <HexagonNumber num={row.no} />
                        </td>
                        <td className="py-3.5 px-1 sm:py-4 sm:px-4 text-center font-bold border-r border-white/10 text-stone-100">{row.months}</td>
                        <td className="py-3.5 px-1 sm:py-4 sm:px-4 text-center font-bold border-r border-white/10 text-stone-100">{row.gym}</td>
                        <td className="py-3.5 px-1 sm:py-4 sm:px-4 text-center font-bold text-stone-100">{row.gymCardio}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </div>

            {/* Note pill container at bottom */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center gap-2.5 px-4 py-2 bg-black/40 border border-white/5 rounded-full text-stone-300 text-[9px] sm:text-xs">
                <svg viewBox="0 0 24 24" width="16" height="16" className="text-red-500 fill-current shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 11l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-semibold text-left leading-tight">All plans include access to world-class equipment and expert guidance.</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: RULES & REGULATIONS */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0e0e11]/85 backdrop-blur-md border border-red-500/35 rounded-2xl p-4 sm:p-8 flex flex-col justify-between animate-border-pulse shadow-[0_0_20px_rgba(239,68,68,0.15)]"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col items-start gap-1 w-full mb-6">
                <div className="flex items-center gap-3 w-full">
                  <OctagonClipboardIcon />
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight italic">
                    RULES <span className="text-red-500">& REGULATIONS</span>
                  </h3>
                </div>
                {/* Red line with stars */}
                <div className="flex items-center gap-2 w-full max-w-[200px] mt-2">
                  <div className="h-[1.5px] bg-red-650 flex-grow" />
                  <span className="text-red-500 text-[8px] tracking-wider">★ ★ ★</span>
                  <div className="h-[1.5px] bg-red-650 flex-grow" />
                </div>
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
                    className="relative py-3.5 flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-6 h-7 rounded-md bg-red-600 flex items-center justify-center shrink-0 font-display font-bold text-white text-sm shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                      {index + 1}
                    </div>
                    <p className="text-stone-300 text-[11px] sm:text-sm leading-relaxed text-left flex-grow font-semibold">
                      {rule.text}
                    </p>
                    <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center shrink-0 bg-red-950/15 shadow-[0_0_8px_rgba(239,68,68,0.15)]">
                      {getRuleIcon(rule.icon)}
                    </div>

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
            
            {/* Balance container */}
            <div className="h-0 md:h-6" />
          </motion.div>

        </motion.div>

        {/* STAY STRONG. STAY FOCUSED. STAY YOU. Slogan area */}
        <div className="mt-16 text-center relative z-10 max-w-2xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
            <div className="hidden sm:block">
              <BodybuilderBicepsIcon />
            </div>
            
            <div className="text-center">
              <h4 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tight italic">
                <span className="text-white">STAY </span>
                <span className="text-red-500">STRONG. </span>
                <span className="text-white">STAY FOCUSED. STAY YOU.</span>
              </h4>
              <p className="text-stone-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-2.5">
                Let’s build a better, stronger you together!
              </p>
            </div>

            <div className="hidden sm:block">
              <BodybuilderLifterIcon />
            </div>
          </div>

          {/* Mobile bodybuilder side icons */}
          <div className="flex sm:hidden items-center justify-center gap-6 mb-3">
            <BodybuilderBicepsIcon />
            <BodybuilderLifterIcon />
          </div>

          {/* Centered red dumbbell at bottom */}
          <div className="flex justify-center mt-6 text-red-500 animate-pulse">
            <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
              <rect x="2" y="10.5" width="20" height="3" rx="1" />
              <rect x="6" y="5" width="2.5" height="14" rx="1" />
              <rect x="3.5" y="7.5" width="2" height="9" rx="0.8" />
              <rect x="15.5" y="5" width="2.5" height="14" rx="1" />
              <rect x="18.5" y="7.5" width="2" height="9" rx="0.8" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
