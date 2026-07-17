import { useMemo, useState } from 'react';
import productsData from '../data/products.json';
import { Product } from '../types/Product';
import { groupProductsByCategory } from '../utils/groupProducts';
import Header from '../components/Header';
import OfferSection from '../components/OfferSection';
import CategorySection from '../components/CategorySection';
import BottomNavigation from '../components/BottomNavigation';

const products: Product[] = productsData;

function Home() {
  const [searchText, setSearchText] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (!normalizedSearch) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [searchText]);

  const productGroups = useMemo(
    () => groupProductsByCategory(filteredProducts),
    [filteredProducts]
  );

  return (
    <main className="app-shell">
      <Header searchText={searchText} onSearchChange={setSearchText} />
      <OfferSection />

      {productGroups.length > 0 ? (
        productGroups.map((group) => (
          <CategorySection
            key={group.category}
            category={group.category}
            products={group.products}
          />
        ))
      ) : (
        <section className="empty-state">
          <h2>No products found</h2>
          <p>Try searching with another product name or category.</p>
        </section>
      )}

     {/* <BottomNavigation /> */}
    </main>
  );
}

export default Home;
