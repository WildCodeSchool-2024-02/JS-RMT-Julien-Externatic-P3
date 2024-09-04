import { useLoaderData } from "react-router-dom";

import OfferCard from "../../../components/frontOffice/OfferCard/OfferCard";

function Favories() {
  const offerData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Mes favoris</h2>
      </div>
      <section className="offer-ul">
        {offerData.map((offer) => (
          <OfferCard offer={offer} key={offer.id} showStar />
        ))}
      </section>
    </>
  );
}

export default Favories;
