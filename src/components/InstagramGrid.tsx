import { Instagram, Heart, MessageCircle } from "lucide-react";

export default function InstagramGrid() {
  const mockPosts = [
    {
      id: "ig-1",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop",
      likes: "152",
      comments: "14",
      caption: "Consistency beats talent. Paresh sir showing correct deadlift biomechanics at Murbad. #murbadgym #bodybuilding"
    },
    {
      id: "ig-2",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop",
      likes: "284",
      comments: "25",
      caption: "Cardio decks are ready! Kickstart high-calorie fat burn in Murbad. #hiit #murbadfitness"
    },
    {
      id: "ig-3",
      imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=400&auto=format&fit=crop",
      likes: "198",
      comments: "19",
      caption: "Clean weights, pure focus. Join the hardest working gym in Maharashtra. #pareshbodyclub"
    },
    {
      id: "ig-4",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop",
      likes: "321",
      comments: "42",
      caption: "Weight loss routines custom-mapped for our female members. Great atmosphere ensured! #ladiesfitness #murbad"
    }
  ];

  return (
    <section 
      id="instagram" 
      className="py-20 bg-[#0c0c0e] relative overflow-hidden"
    >
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-red-600/10 rounded-xl text-red-500 mb-3 hover:scale-110 transition-transform duration-305">
            <Instagram size={22} />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            INSTAGRAM FEED <span className="text-red-500">@PARESH_BODY_CLUB</span>
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-lg mx-auto mt-2 leading-relaxed font-light">
            Stay plugged into our daily routine frames, reels, fat-to-fit updates, and motivational tips.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {mockPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/paresh_body_club_murbad/"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square border border-white/5 bg-stone-900 block"
            >
              {/* Image */}
              <img
                src={post.imageUrl}
                alt="Instagram gym snippet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-50"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay displaying Stats & Caption preview */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 z-10">
                <div className="flex items-center justify-center gap-6 text-white font-mono font-bold text-sm sm:text-base h-full">
                  <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                    <Heart size={16} className="fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                    <MessageCircle size={16} className="fill-current" /> {post.comments}
                  </span>
                </div>

                <p className="text-stone-300 font-sans text-[10px] leading-relaxed line-clamp-2 border-t border-white/10 pt-3">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Prompt Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/paresh_body_club_murbad/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-white text-stone-300 hover:text-red-600 text-xs font-black uppercase tracking-widest rounded-lg border border-white/10 hover:border-white transition-all duration-300 cursor-pointer shadow-lg"
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
