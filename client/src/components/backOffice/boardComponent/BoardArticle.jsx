import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import logoLink from "../../../assets/icones/play-circle.svg";
import ButtonComponent from "../../UI/buttonComponent/ButtonComponent";
import connexion from "../../../services/connexion";

function BoardArticle({ data, path }) {
  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";
  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/users/${data.id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };
  return (
    <article className="company-card">
      <Link to={`${path}/${data.id}`}>
        <img src={logoLink} alt={`Logo lien détail ${data.id}`} />
      </Link>
      <ButtonComponent
        text="♻️"
        handleClick={handleDelete}
        css=" button-delete"
      />
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
};

export default BoardArticle;
