import { useMemo, useState } from 'react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import { Product } from '../types/Product';
import { groupProductsByCategory } from '../utils/groupProducts';
import Header from '../components/Header';
import OfferSection from '../components/OfferSection';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import BottomNavigation from '../components/BottomNavigation';

const products: Product[] = productsData as Product[];
const categories = categoriesData as { name: string; image: string }[];

function Home() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const productGroupsFromCategories = useMemo(
    () => categories.map((category) => ({
      category: category.name,
      image: category.image,
      products: filteredProducts.filter((product) => product.category === category.name)
    })),
    [filteredProducts]
  );

  const selectedGroup = productGroupsFromCategories.find(
    (group) => group.category === selectedCategory
  );

  return (
    <main className="app-shell" dir="rtl">
      <Header searchText={searchText} onSearchChange={setSearchText} />

      {selectedGroup ? (
        <section className="category-screen">
          <div className="section-title-row">
             <h2>{selectedGroup.category}</h2>
            <button className="text-button" onClick={() => setSelectedCategory(null)}>
              العودة
            </button>
           
          </div>

          <div className="product-grid">
            {selectedGroup.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <>
          <OfferSection />

          {productGroupsFromCategories.length > 0 && (
            <section className="groups-section">
              <div className="section-title-row">
                <h2>الأقسام</h2>
              </div>
              <div className="groups-scroll" aria-label="Product categories">
                {productGroupsFromCategories.map((group) => (
                  <button
                    key={group.category}
                    className="group-card"
                    onClick={() => setSelectedCategory(group.category)}
                  >
                    <img
                      src={`./images/${group.image}`}
                      alt={group.category}
                      className="group-card-image"
                    />
                    <span className="group-card-name">{group.category}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* {productGroups.length > 0 ? (
            productGroups.map((group) => (
              <CategorySection
                key={group.category}
                id={`category-${group.category}`}
                category={group.category}
                products={group.products}
              />
            ))
          ) : (
            <section className="empty-state">
              <h2>No products found</h2>
              <p>Try searching with another product name or category.</p>
            </section>
          )} */}
        </>
      )}

      {/* <BottomNavigation /> */}
    </main>
  );
}

export default Home;
