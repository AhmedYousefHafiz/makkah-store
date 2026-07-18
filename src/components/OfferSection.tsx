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
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="offer-card"
            style={{ background: offer.backgroundColor }}
          >
            {offer.badge && <span className="offer-badge">{offer.badge}</span>}
            <h3>{offer.title}</h3>
            <p className="offer-subtitle">{offer.subtitle}</p>
            <p className="offer-description">{offer.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfferSection;
