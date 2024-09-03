import { useLoaderData } from "react-router-dom";

import OfferCard from "../../../components/frontOffice/OfferCard/OfferCard";

function Candidacies() {
  const offerData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Mes candidatures</h2>
      </div>
      <section className="offer-ul">
        {offerData.map((offer) => (
          <OfferCard offer={offer} key={offer.id} showStar={false} />
        ))}
      </section>
    </>
  );
}

export default Candidacies;
