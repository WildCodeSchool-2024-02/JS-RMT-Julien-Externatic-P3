import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Card from "../../../components/frontOffice/Card/Card";
import { useExternatic } from "../../../context/ExternaticContext";

function Favories() {
  const { logedUser } = useExternatic();
  const favoriesData = useLoaderData();

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Mes favoris</h2>
      </div>
      {favoriesData.length !== 0 ? (
        <section className="offer-ul">
          {favoriesData.map((offer) => (
            <Card data={offer} key={offer.id} showStar context />
          ))}
        </section>
      ) : (
        <h2 className="error-title">Vous n'avez pas encore de favoris !</h2>
      )}
      <Link
        to={`/candidat/${logedUser.id}?type=mine`}
        className="btn return-btn"
      >
        Retour
      </Link>
      <ToastContainer />
    </>
  );
}

export default Favories;
