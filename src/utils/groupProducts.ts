import { Product } from '../types/Product';

export type ProductGroup = {
  category: string;
  products: Product[];
};

export function groupProductsByCategory(products: Product[]): ProductGroup[] {
  const groups = products.reduce<Record<string, Product[]>>((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }

    acc[product.category].push(product);
    return acc;
  }, {});

  return Object.entries(groups).map(([category, items]) => ({
    category,
    products: items
  }));
}
