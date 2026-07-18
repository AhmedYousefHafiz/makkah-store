export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  oldPrice?: number;
  backgroundColor: string;
  badge?: string;
  image?: string;
}
