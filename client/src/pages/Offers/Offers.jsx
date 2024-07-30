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
      <ul className="offer-ul">
        {offerData.map((offer) => (
          <li className="offer-li" key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Offers;
