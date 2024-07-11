import { useLoaderData } from "react-router-dom";

import OfferCard from "../components/OfferCard";

import "../App.css";
import "./Offers.css";

function Offers() {
  const offerData = useLoaderData();

  return (
    <>
    <div className="offerListTitle">
      <h2 className="styleTitleH2">Toutes les offres</h2>
    </div>
    <ul className="offerUl">
      {offerData.map((offer) => (
        <li className="offerLi" key={offer.id}>
          <OfferCard item={offer} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default Offers
