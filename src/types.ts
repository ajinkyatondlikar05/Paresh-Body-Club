export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Resolvable dynamic icon using Lucide Icons
}

export interface PlanItem {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  glowColor?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
