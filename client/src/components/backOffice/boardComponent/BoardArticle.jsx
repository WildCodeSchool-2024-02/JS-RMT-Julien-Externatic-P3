import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import logoLink from "../../../assets/icones/play-circle.svg";
import logoBin from "../../../assets/icones/trash-2.svg";
import connexion from "../../../services/connexion";

function BoardArticle({ data, path, deleted }) {
  const navigate = useNavigate();
  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";
  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/users/${data.id}`);
      navigate(".", { replace: true });
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  return (
    <article className="company-card">
      <Link to={`${path}/${data.id}`}>
        <img src={logoLink} alt={`Logo lien détail ${data.id}`} />
      </Link>
      {deleted && (
        <button type="button" className="button-delete" onClick={handleDelete}>
          <img src={logoBin} alt="Corbeille supprimer" />
        </button>
      )}
      {Object.keys(data)
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={`${getCls(data[key])}`}
            data={data[key]}
            key={data[key]}
          />
        ))}
    </article>
  );
}

BoardArticle.propTypes = {
  data: PropTypes.shape().isRequired,
  path: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
};

export default BoardArticle;
