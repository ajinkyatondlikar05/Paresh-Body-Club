import { useState, FormEvent } from "react";
import { 
  MapPin, 
  Send, 
  Phone, 
  Mail, 
  CheckCircle, 
  Clock, 
  Navigation, 
  ShieldCheck 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phoneNumber) return;

    setLoading(true);

    // Simulate elegant backend response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#0a0a0c] relative overflow-hidden bg-grid-pattern"
    >
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            Ready to <span className="text-red-500">Transform?</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed font-light">
            Have queries regarding prices, personal slots, or equipment availability? Drop us a prompt message. Our front desk reviews communications hourly.
          </p>
        </div>

        {/* Contact Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact details + Embedded Interactive maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-black text-white text-xl uppercase tracking-wider">
                Our Headquarters
              </h3>
              
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="flex gap-4 p-4 rounded-xl bg-stone-900/60 border border-white/5">
                  <div className="p-3 bg-red-650/10 rounded-lg text-red-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider block">Physical Location</span>
                    <span className="text-white text-xs sm:text-sm font-semibold block mt-0.5">
                      Mata Nagar Rd, Shirgaon, Murbad, Maharashtra 421401
                    </span>
                    <span className="text-red-500 text-[10px] uppercase font-bold tracking-wider block mt-1.5 font-mono">
                      Location Code: 794Q+CW Murbad, Maharashtra
                    </span>
                  </div>
                </div>

                {/* Telephone Line */}
                <div className="flex gap-4 p-4 rounded-xl bg-stone-900/60 border border-white/5">
                  <div className="p-3 bg-red-650/10 rounded-lg text-red-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider block">Direct Line</span>
                    <a href="tel:+919021468123" className="text-white text-sm sm:text-base font-bold block mt-0.5 hover:text-red-500 transition-colors">
                      +91 90214 68123
                    </a>
                  </div>
                </div>

                {/* Electronic Mailbox */}
                <div className="flex gap-4 p-4 rounded-xl bg-stone-900/60 border border-white/5">
                  <div className="p-3 bg-red-650/10 rounded-lg text-red-500 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider block">Inquiry Mailbox</span>
                    <a href="mailto:info@pareshbodyclub.com" className="text-white text-sm sm:text-base font-bold block mt-0.5 hover:text-red-500 transition-colors">
                      info@pareshbodyclub.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Embed targeting Mata Nagar, Shirgaon, Murbad */}
            <div className="h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-stone-900 relative">
              <iframe
                title="PARESH BODY CLUB Google Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.518602652497!2d73.3970222!3d19.2274404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ebd4f1ecb2e9%3A0xe8c7b6ffddb933cc!2sMurbad%2C%20Maharashtra%20421401!5e0!3m2!1sen!2sin!4v1716719138092!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-110 opacity-75"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded border border-white/5 flex items-center gap-1.5 shadow">
                <Navigation size={10} className="text-red-500" /> Shirgaon Region
              </div>
            </div>
          </div>

          {/* Right Side: High-polish Interaction Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f0f13] border border-white/10 p-6 sm:p-10 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h4 className="font-display font-black text-white text-lg sm:text-xl uppercase tracking-wider">
                        Send Secure Enquire
                      </h4>
                      <p className="text-stone-500 text-xs mt-1">
                        Fill your vital contact links below, and our training supervisors will reach back.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Name Input */}
                        <div>
                          <label className="text-[10px] uppercase font-black tracking-widest text-[#9ca3af] block mb-2">
                            Athletic Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full py-3.5 px-4 bg-stone-900 border border-white/5 hover:border-white/10 focus:border-red-500/50 rounded-lg text-white text-xs sm:text-sm font-medium focus:outline-none transition-all"
                          />
                        </div>

                        {/* Phone input */}
                        <div>
                          <label className="text-[10px] uppercase font-black tracking-widest text-[#9ca3af] block mb-2">
                            WhatsApp / Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98XXX XXXXX"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full py-3.5 px-4 bg-stone-900 border border-white/5 hover:border-white/10 focus:border-red-500/50 rounded-lg text-white text-xs sm:text-sm font-medium focus:outline-none transition-all"
                          />
                        </div>

                      </div>

                      {/* Email input */}
                      <div>
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#9ca3af] block mb-2">
                          Email ID (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="johndoe@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full py-3.5 px-4 bg-stone-900 border border-white/5 hover:border-white/10 focus:border-red-500/50 rounded-lg text-white text-xs sm:text-sm font-medium focus:outline-none transition-all"
                        />
                      </div>

                      {/* Message body input */}
                      <div>
                        <label className="text-[10px] uppercase font-black tracking-widest text-[#9ca3af] block mb-2">
                          Your Fitness Query / Goals *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Write down your queries (e.g. Weight loss plan details, best times to visit...)"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full py-3.5 px-4 bg-stone-900 border border-white/5 hover:border-white/10 focus:border-red-500/50 rounded-lg text-white text-xs sm:text-sm font-medium focus:outline-none transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 glow-btn-red cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send size={14} /> Submit Query
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6 h-full"
                  >
                    <div className="p-5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      <CheckCircle size={48} className="animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-white text-2xl uppercase tracking-wider">
                        Transmission Successful!
                      </h4>
                      <p className="text-stone-400 text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed font-light">
                        Thank you for reaching out to **PARESH BODY CLUB**. Your vital parameters were logged. We will reach back via WhatsApp shortly.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-950 rounded-xl border border-white/5 space-y-2.5 max-w-xs w-full text-left font-sans text-xs">
                      <div className="flex items-center gap-2 text-stone-500">
                        <Clock size={12} />
                        <span>Expected Response: &lt; 2 Hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-500">
                        <ShieldCheck size={12} className="text-emerald-400" />
                        <span>Data Protected Securely</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-stone-500 hover:text-white text-xs font-extrabold uppercase tracking-widest hover:underline transition-all cursor-pointer"
                    >
                      Send another response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
