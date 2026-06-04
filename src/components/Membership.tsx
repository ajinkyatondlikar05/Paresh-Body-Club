import { Check, Flame, MessageSquare } from "lucide-react";
import { PLANS } from "../data";
import { motion } from "motion/react";

export default function Membership() {
  const handlePlanInquiry = (planTitle: string, price: string) => {
    // Generate pre-filled WhatsApp message based on plan
    const phoneNumber = "919021468123";
    const message = `Hello PARESH BODY CLUB MURBAD! I am excited to join and would like to register or query about the "${planTitle}" priced at ${price}. Please guide me on next admission steps.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section 
      id="membership" 
      className="py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Visual neon ambient lamps */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-82 h-82 bg-stone-900/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Grid */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
            Pricing & Subscriptions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            Choose Your <span className="text-red-500">Plan</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Highly competitive flat-rates without hidden entry boundaries. Invest in clean physical strength and health transformation today.
          </p>
        </div>

        {/* Plan Cards Flex Layout / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.isPopular 
                  ? "bg-[#0f0f13] border-red-500/80 shadow-[0_15px_40px_rgba(239,68,68,0.15)]" 
                  : "bg-[#0a0a0c] border-white/5 hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              } group`}
            >
              {/* Hot Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-display font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_5px_15px_rgba(239,68,68,0.4)] flex items-center gap-1.5">
                  <Flame size={12} className="animate-pulse" /> MOST RECOMMENDED
                </div>
              )}

              <div>
                {/* Plan Header */}
                <span className="text-stone-500 text-xs sm:text-sm uppercase font-black tracking-widest block">
                  {plan.title}
                </span>

                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-white group-hover:text-red-500 transition-colors duration-200">
                    {plan.price}
                  </span>
                  <span className="text-stone-500 text-xs font-semibold uppercase tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 border-t border-white/5 pt-6 text-left">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 bg-red-600/10 rounded text-red-500 shrink-0 mt-0.5">
                        <Check size={14} className="stroke-[2.5]" />
                      </div>
                      <span className="text-stone-300 text-xs sm:text-sm leading-tight font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Block */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => handlePlanInquiry(plan.title, plan.price)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-red-600 hover:bg-white text-white hover:text-red-600 shadow-md shadow-red-500/20 glow-btn-red"
                      : "bg-stone-900 hover:bg-red-600 text-stone-300 hover:text-white border border-white/5 hover:border-transparent"
                  }`}
                >
                  <MessageSquare size={14} /> Get Active Blueprint
                </button>
                <span className="text-[10px] uppercase text-stone-500 font-bold block text-center mt-2 tracking-wide">
                  No hidden lock-outs. Cancel anytime.
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Moneyback Assurance Highlight banner */}
        <p className="text-center text-stone-500 text-xs mt-12 max-w-xl mx-auto font-light leading-relaxed">
          * Please pay directly at the gym reception desk under supervision. Monthly charges are calculated flat at start day intervals. Direct guidance by Paresh Chavan is highly verified.
        </p>

      </div>
    </section>
  );
}
