import { useState } from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

type CategorySectionProps = {
  category: string;
  products: Product[];
};

function CategorySection({ category, products }: CategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);
  const hasMoreProducts = products.length > 3;

  return (
    <section className="section-block">
      <div className="section-title-row">
        <h2>{category}</h2>
        <div className="section-actions">
          <span className="count-label">{products.length} items</span>
          {hasMoreProducts && (
            <button className="text-button" onClick={() => setShowAll((value) => !value)}>
              {showAll ? 'Hide all' : 'Show all'}
            </button>
          )}
        </div>
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
