import { useLoaderData } from "react-router-dom";

import OfferCard from "../../../components/frontOffice/OfferCard/OfferCard";

function Candidacies() {
  const candidaciesData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Mes candidatures</h2>
      </div>
      <section className="offer-ul">
        {candidaciesData.map((apply) => (
          <OfferCard data={apply} key={apply.id} showStar={false} context="candidacy" />
        ))}
      </section>
    </>
  );
}

export default Candidacies;
