import { Link, useLoaderData } from "react-router-dom";

import Card from "../../../components/frontOffice/Card/Card";
import { useExternatic } from "../../../context/ExternaticContext";

function Candidacies() {
  const candidaciesData = useLoaderData();
  const { logedUser } = useExternatic();
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
      <Link
        to={`/candidat/${logedUser.id}?type=mine`}
        className="btn return-btn"
      >
        Retour
      </Link>
    </>
  );
}

export default Candidacies;
