import { Link } from "react-router-dom";
import './notFound404.css'

function NotFound() {
  return (
    <div className="notFound-container">
      <h1 className="Page-notFound">404 - Page non trouvée</h1>
      <div className="links-container">
      <h3 className="page-introuvable">Désolé, la page que vous recherchez semble introuvable</h3>
      <Link to="/" >
        Retour à l'accueil
      </Link>
      <Link to="/offres" >
        Trouve toutes les offres
      </Link>
      </div>
    </div>
  );
}

export default NotFound;
