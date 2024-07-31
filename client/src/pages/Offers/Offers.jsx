import { useLoaderData } from "react-router-dom";
import OfferCard from "../../components/OfferCard/OfferCard";
import "./Offers.css";

function Offers() {
  const offerData = useLoaderData();

  return (
    <main>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Toutes les offres</h2>
      </div>
      <section className="offer-ul">
        {offerData.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </section>
    </main>
  );
}

export default Offers;
