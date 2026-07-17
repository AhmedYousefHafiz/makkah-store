import { Product } from '../types/Product';
import ProductCard from './ProductCard';

type CategorySectionProps = {
  category: string;
  products: Product[];
};

function CategorySection({ category, products }: CategorySectionProps) {
  return (
    <section className="section-block">
      <div className="section-title-row">
        <h2>{category}</h2>
        <span className="count-label">{products.length} items</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
