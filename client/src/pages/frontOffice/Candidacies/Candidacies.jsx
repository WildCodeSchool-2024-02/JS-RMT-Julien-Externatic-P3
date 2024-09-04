import { useLoaderData } from "react-router-dom";

import Card from "../../../components/frontOffice/Card/Card";

function Candidacies() {
  const candidaciesData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Mes candidatures</h2>
      </div>
      {candidaciesData.length === 0 ? (
        <h2 className="error-title">
          Vous n'avez pas de candidatures en cours !
        </h2>
      ) : (
        <section className="offer-ul">
          {candidaciesData.map((apply) => (
            <Card
              data={apply}
              key={apply.id}
              showStar={false}
              context="candidacy"
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Candidacies;
