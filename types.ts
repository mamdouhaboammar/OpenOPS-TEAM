export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  badge?: string;
  category?: string;
  compatibility?: string[];
  rating?: number;
  reviewsCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}