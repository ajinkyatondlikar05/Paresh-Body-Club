import {
  FacilityItem,
  PlanItem,
  ReviewItem,
  TrainerItem,
  FAQItem
} from "./types";

export const STATS = [
  { value: "10K", label: "Happy Members", prefix: "" },
  { value: "15+", label: "Years Experience", prefix: "" },
  { value: "100%", label: "Result Oriented", prefix: "" },
  { value: "25+", label: "Modern Equipment Stations", prefix: "" }
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
    title: "FULLY AC GYM",
    description: "Fully air-conditioned training space for a comfortable workout experience.",
    iconName: "Snowflake"
  },
  {
    id: "fac-10",
    title: "CCTV SURVEILLANCE",
    description: "24/7 CCTV monitoring for a safer and more secure gym environment.",
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

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Vikrant Chavan",
    role: "",
    rating: 5,
    comment: "One of the best gym & amazing facility, top equipment and great environment.",
    date: "2 months ago"
  },
  {
    id: "rev-2",
    author: "Rohit Patil",
    role: "",
    rating: 4,
    comment: "Good gym for workout and fitness training.",
    date: "1 month ago"
  },
  {
    id: "rev-3",
    author: "Sagar Gholap",
    role: "",
    rating: 5,
    comment: "Awesome gym in Murbad. Highly certified trainer, and extremely helpful staff members. Modern and well-maintained equipment.",
    date: "3 months ago"
  },
  {
    id: "rev-4",
    author: "Amit Bhoir",
    role: "",
    rating: 4,
    comment: "Best bodybuilding club in Murbad. The gym environment is extremely energetic and motivating. Highly recommend to everyone around Murbad.",
    date: "2 weeks ago"
  },
  {
    id: "rev-5",
    author: "Pratiksha Parab",
    role: "",
    rating: 5,
    comment: "Perfect gym for ladies as well. Extremely comfortable, clean changing rooms, great safety, and trainers provide custom weight loss schemes.",
    date: "4 months ago"
  },
  {
    id: "rev-6",
    author: "Nilesh Vishe",
    role: "",
    rating: 4,
    comment: "Excellent cardio machines and a massive dumbbells collection. Space is clean, and the surround heavy speaker system is absolutely fantastic!",
    date: "5 months ago"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are the timings of PARESH BODY CLUB MURBAD?",
    answer: "Our gym opens from Monday to Thursday and Saturday.\nMorning: 5:30 AM to 10:30 AM\nEvening: 3:30 PM to 10:30 PM\nFriday: Holiday"
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
