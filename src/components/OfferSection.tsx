import offersData from '../data/offers.json';
import { Offer } from '../types/Offer';

const offers: Offer[] = offersData;

function OfferSection() {
  return (
    <section className="section-block">
      <div className="section-title-row">
        <h2>عروض اليوم</h2>
        <button className="text-button">عرض الكل</button>
      </div>

      <div className="offers-scroll" aria-label="Current offers">
        {offers.map((offer) => {
          const discount = offer.oldPrice
            ? Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100)
            : 0;

          return (
            <article key={offer.id} className="product-card offer-card">
              <div className="offer-image product-image">
                <img
                  src={offer.image ? `./images/${offer.image}` : './images/default.png'}
                  className="offer-photo"
                  onError={(e) => {
                    e.currentTarget.src = './images/default.png';
                  }}
                  alt={offer.title}
                />
              </div>

              <div className="product-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>

                <div className="price-row">
                  <span className="current-price">{offer.price} ج.م</span>
                  {offer.oldPrice && <span className="old-price">{offer.oldPrice} ج.م</span>}
                </div>

                {discount > 0 && <span className="discount-badge">-{discount}%</span>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OfferSection;
