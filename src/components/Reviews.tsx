import { Star, MessageSquareCode, Quote } from "lucide-react";
import { REVIEWS } from "../data";
import { motion } from "motion/react";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-[#0c0c0e] relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-red-650/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-stone-800/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header containing the 4.8 rating metric summary details */}
        <div className="flex flex-col gap-8 mb-16 lg:items-center">
          <div className="text-left lg:text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-red-500 font-display font-black uppercase text-xs sm:text-sm lg:text-xl tracking-widest block mb-2 lg:mb-3 [text-shadow:0_0_12px_rgba(239,68,68,0.6)] lg:[text-shadow:0_0_15px_rgba(239,68,68,0.5)]"
            >
              Customer Experiences
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
            >
              Testimonials & <span className="text-red-500">Reviews</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-stone-300 font-sans text-xs sm:text-sm md:text-base max-w-xl mt-3 leading-relaxed font-light lg:mx-auto"
            >
              Don't just take our word for it. Read honest reviews from our dedicated member network who successfully rebuilt their physical confidence.
            </motion.p>
          </div>

          {/* Interactive Rating Badge Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02, borderColor: "rgba(239,68,68,0.3)", boxShadow: "0 15px 40px rgba(239,68,68,0.15)", transition: { duration: 0.3 } }}
            className="bg-stone-900/60 border border-white/5 py-5 px-8 sm:py-6 sm:px-12 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)] self-start lg:self-center w-fit transition-colors duration-300 cursor-default"
          >
            <span className="block text-4xl sm:text-5xl font-mono font-black text-white text-center">4.8</span>
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-1 mt-2 text-yellow-500"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0, rotate: -45 },
                    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 300 } }
                  }}
                >
                  <Star size={16} className="fill-current drop-shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
                </motion.div>
              ))}
            </motion.div>
            <span className="block text-stone-500 text-[10px] uppercase font-bold tracking-wider mt-2.5 text-center">
              Overall Score Metric
            </span>
          </motion.div>
        </div>

        {/* glassmorphism reviews layout */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {REVIEWS.map((rev) => (
            <motion.div
              key={rev.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, borderColor: "rgba(239, 68, 68, 0.4)", boxShadow: "0 15px 35px rgba(239,68,68,0.1)", transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-stone-900/45 hover:bg-stone-900/90 border border-white/5 transition-colors duration-300 group backdrop-blur shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Quotation Icon and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(rev.rating) ? "fill-current" : "text-stone-600"}
                      />
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Quote size={20} className="text-stone-800 group-hover:text-red-950 transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Testimonial Statement */}
                <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-light italic">
                  “{rev.comment}”
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-red-500 transition-colors duration-200 uppercase">
                  {rev.author}
                </h4>
                <span className="text-[10px] font-mono text-white block">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
