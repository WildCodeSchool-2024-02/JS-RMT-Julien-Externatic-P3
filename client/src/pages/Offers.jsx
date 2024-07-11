import { useLoaderData } from "react-router-dom";

import OfferCard from "../components/OfferCard";

function Offers() {
  const offerData = useLoaderData();

  return (
    <>
    <div>
      <h1>Liste des offres</h1>
    </div>
    <ul className="offer-ul">
      {offerData.map((offer) => (
        <li className="offer-li" key={offer.id}>
          <OfferCard item={offer} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default Offers
