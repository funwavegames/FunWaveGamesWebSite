export interface GameItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  amazonUrl: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  highlights: string[];
  platform: string;
  status: 'available' | 'coming_soon';
  releaseYear: string;
  ageRating: string;
  price: string;
  developer: string;
}

export interface UpcomingGame {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  expectedYear: string;
  stage: string;
  tags: string[];
}

export type ActivePage = 'games' | 'upcoming' | 'about' | 'privacy-policy' | 'contact';
