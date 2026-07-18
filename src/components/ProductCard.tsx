import { Product } from '../types/Product';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        <img
          src={"./images/" + product.id + ".jpeg"}
          className="product-photo"
          onError={(e) => {
            e.currentTarget.src = "./images/default.png";
          }}
        />

      </div>

      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="price-row">
          <span className="current-price">{product.price} ج.م</span>
          {product.oldPrice && <span className="old-price">{product.oldPrice} ج.م</span>}
        </div>

        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
      </div>
    </article>
  );
}

export default ProductCard;
