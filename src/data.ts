import { 
  FacilityItem, 
  PlanItem, 
  ReviewItem, 
  TrainerItem, 
  GalleryItem, 
  FAQItem 
} from "./types";

export const STATS = [
  { value: "500+", label: "Happy Members", prefix: "" },
  { value: "5+", label: "Years Impacting Lives", prefix: "" },
  { value: "100%", label: "Result Oriented", prefix: "" },
  { value: "15+", label: "Modern Equipment Stations", prefix: "" }
];

export const ABOUT_FEATURES = [
  {
    title: "Modern Workout Machines",
    description: "Equipped with state-of-the-art bio-mechanically engineered resistance units."
  },
  {
    title: "Cardio Zone",
    description: "Premium high-impact treadmills, cross-trainers, and spinning cycles."
  },
  {
    title: "Strength Training",
    description: "Robust power cages, Olympic lifting platforms, and professional barbells."
  },
  {
    title: "Weight Loss Programs",
    description: "Personalized fat loss pacing, nutrition counseling, and energetic intervals."
  },
  {
    title: "Muscle Building",
    description: "Targeted hypertrophy routines, progressive overload layouts, and guide support."
  },
  {
    title: "Personal Training",
    description: "Dedicated 1-on-1 coaching focusing on pristine form, posture, and peak energy."
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "fac-1",
    title: "Treadmills",
    description: "Commercial grade running decks with real-time shock absorption.",
    iconName: "Flame"
  },
  {
    id: "fac-2",
    title: "Dumbbells",
    description: "Full professional grade metallic iron dumbbells up to heavy weight clusters.",
    iconName: "Dumbbell"
  },
  {
    id: "fac-3",
    title: "Weight Training",
    description: "Targeted anatomical selectorized pin-drop plates and multi-stations.",
    iconName: "Zap"
  },
  {
    id: "fac-4",
    title: "Cardio Equipment",
    description: "Cross-trainers, stationary cycling hubs, and high-intensity rope stations.",
    iconName: "Heart"
  },
  {
    id: "fac-5",
    title: "Locker Facility",
    description: "Secure visual lockers for peaceful workout storage during routines.",
    iconName: "Shield"
  },
  {
    id: "fac-6",
    title: "Changing Room",
    description: "Separated, highly pristine spaces for hygienic changeovers.",
    iconName: "Users"
  },
  {
    id: "fac-7",
    title: "Water Facility",
    description: "Purified continuous cold drinking water facility kept highly accessible.",
    iconName: "Droplets"
  },
  {
    id: "fac-8",
    title: "Music System",
    description: "Energetic multi-channel surround sound system pumping motivating beats.",
    iconName: "Music"
  },
  {
    id: "fac-9",
    title: "AC SURVEILLANCE",
    description: "Air-conditioned environment with CCTV surveillance for a safe, comfortable, and secure workout experience.",
    iconName: "Cctv"
  }
];

export const PLANS: PlanItem[] = [
  {
    id: "p1",
    title: "Monthly Plan",
    price: "₹800",
    period: "Month",
    features: [
      "Access to Gym Floor & Cardio Zone",
      "Standard Strength Training",
      "Locker & Shower Access Included",
      "Free General Trainer Support",
      "Surround High Energy Playlist Music",
      "Drinking Purified Water Facility",
    ],
    isPopular: false
  },
  {
    id: "p2",
    title: "Quarterly Plan",
    price: "₹2,200",
    period: "3 Months",
    features: [
      "Everything in Monthly Plan",
      "Personalized Workout Strategy Map",
      "Custom Weight Tracking Checkpoints",
      "Discounted Fat Loss Nutrition Layouts",
      "Priority General Coaching Mentoring",
      "Best Deal for Beginners",
    ],
    isPopular: true,
    glowColor: "rgba(239, 68, 68, 0.4)"
  },
  {
    id: "p3",
    title: "Yearly Plan",
    price: "₹7,500",
    period: "Year",
    features: [
      "Full Unlimited 365-Day Floor Access",
      "Complimentary BMI Assessment Reports",
      "Unlimited Cardio & Muscle Building Support",
      "Advanced Progressive Hypertrophy Guides",
      "2 Guest Gym Floor Entry Passes",
      "Most Economical Plan for Devoted Athletes",
    ],
    isPopular: false
  }
];

export const TRAINERS: TrainerItem[] = [
  {
    id: "tr-1",
    name: "Master Paresh",
    role: "Founder & Lead Trainer",
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop",
    specialties: ["Bodybuilding Elite", "Strength Architecture", "Hypertrophy Programing"]
  },
  {
    id: "tr-2",
    name: "Amit Vishe",
    role: "Senior Fitness Coach",
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    specialties: ["Cardio Conditioning", "Target Fat Loss Pacing", "Agility Drills"]
  },
  {
    id: "tr-3",
    name: "Vikram Pawar",
    role: "Physique & Nutrition Advisor",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    specialties: ["Posture Alignment", "Supplement Guide Layouts", "Power Lifting Mentor"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Strength Setup",
    category: "Workout area",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Premium Lat & Bench Machines",
    category: "Machines",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Pro Iron Dumbbells Stack",
    category: "Dumbbells",
    imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "1-on-1 Fitness Mentorship",
    category: "Fitness training",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "High-Calorie Cardio Zone",
    category: "Cardio section",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Motivational Gym Facility Layout",
    category: "Gym interior",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Vikrant Chavan",
    role: "Google Local Guide",
    rating: 5,
    comment: "One of the best gym & amazing facility, top equipment and great environment.",
    date: "2 months ago"
  },
  {
    id: "rev-2",
    author: "Local Member",
    role: "Fitness Enthusiast",
    rating: 5,
    comment: "Good gym for workout and fitness training.",
    date: "1 month ago"
  },
  {
    id: "rev-3",
    author: "Sagar Gholap",
    role: "Power Athlete",
    rating: 5,
    comment: "Awesome gym in Murbad. Highly certified trainer, and extremely helpful staff members. Modern and well-maintained equipment.",
    date: "3 months ago"
  },
  {
    id: "rev-4",
    author: "Amit Bhoir",
    role: "Mata Nagar Resident",
    rating: 5,
    comment: "Best bodybuilding club in Mata Nagar region. The gym environment is extremely energetic and motivating. Highly recommend to everyone around Murbad.",
    date: "2 weeks ago"
  },
  {
    id: "rev-5",
    author: "Pratiksha Parab",
    role: "Murbad Member",
    rating: 5,
    comment: "Perfect gym for ladies as well. Extremely comfortable, clean changing rooms, great safety, and trainers provide custom weight loss schemes.",
    date: "4 months ago"
  },
  {
    id: "rev-6",
    author: "Nilesh Vishe",
    role: "Body Builder",
    rating: 5,
    comment: "Excellent cardio machines and a massive dumbbells collection. Space is clean, and the surround heavy speaker system is absolutely fantastic!",
    date: "5 months ago"
  },
  {
    id: "rev-7",
    author: "Roshan Patil",
    role: "Local Resident",
    rating: 5,
    comment: "Excellent strength training setup. Best professional gym in Shirgaon and Mata Nagar Rd area.",
    date: "1 month ago"
  },
  {
    id: "rev-8",
    author: "Snehal Deshmukh",
    role: "Cardio Enthusiast",
    rating: 5,
    comment: "Affordable quarterly and yearly plans compared to high-end amenities. Worth every rupee. Friendly staff.",
    date: "6 months ago"
  },
  {
    id: "rev-9",
    author: "Vipul T.",
    role: "Strength Trainer",
    rating: 4.8,
    comment: "The vibe here keeps me regular. Excellent music setup, purified water, neat lockers, and positive energy from Paresh sir.",
    date: "3 weeks ago"
  },
  {
    id: "rev-10",
    author: "Kunal Karale",
    role: "Gym Regular",
    rating: 5,
    comment: "Clean changing rooms, modern treadmills, robust weights, first class environment for serious fitness lovers in Murbad!",
    date: "6 months ago"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the timings of PARESH BODY CLUB MURBAD?",
    answer: "Our gym opens from Monday to Saturday, Morning: 6:00 AM to 10:00 AM, and Evening: 5:00 PM to 9:30 PM. We are closed on Sundays to allow muscle recovery and equipment audits."
  },
  {
    id: "faq-2",
    question: "Is there separate general guidance or do I have to pay for extreme personal training?",
    answer: "Every plan includes general floor guidance where our certified coaches assist you with correct machine forms and warm-ups. If you require targeted 1-on-1 physique blueprint mapping, we offer affordable premium personal training slots."
  },
  {
    id: "faq-3",
    question: "Is the gym safe and comfortable for women?",
    answer: "Absolutely. We are proud of our highly respectful, safe, and family-friendly environment. We have several female members following custom routines, clean separated changing zones, and constant professional supervision."
  },
  {
    id: "faq-4",
    question: "What equipment do you have for strength & cardio?",
    answer: "We feature high-grade commercial running decks (Treadmills), dedicated dumbbells stack up to advanced weights, multi-station cables, Smith machines, heavy squats racks, leg presses, and diverse core muscle selectorized machines."
  },
  {
    id: "faq-5",
    question: "Are there changing facilities and secure storage?",
    answer: "Yes, we provide safe storage lockers for your bags and accessories during workouts, as well as highly pristine separated changing chambers."
  }
];
