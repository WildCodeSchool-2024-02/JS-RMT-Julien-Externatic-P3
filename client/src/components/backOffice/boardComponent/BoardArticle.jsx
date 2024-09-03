import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";
import ButtonDelete from "../../UI/buttonComponent/ButtonDelete";
import ConfirmationModal from "../../UI/Modal/ConfirmModal/ConfirmModal";

import logoLink from "../../../assets/icones/play-circle.svg";
import connexion from "../../../services/connexion";

function BoardArticle({ data, pathFront, pathBack, deleted }) {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState();

  const gridTemplate = {
    gridTemplateColumns: `repeat(${Object.keys(data).length}, 1fr)`,
  };

  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";

  const handleDelete = async () => {
    try {
      await connexion.delete(`/api/${pathBack}/${data.id}`);
      navigate(".", { replace: true });
      setModalOpen(false);
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  return (
    <article className={`company-card ${pathBack === "offers" ? "offers-case" : ""}`} style={gridTemplate}>
      <Link to={`${pathFront}/${data.id}`}>
        <img src={logoLink} alt={`Logo lien détail ${data.id}`} />
      </Link>
      {Object.keys(data)
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={`${getCls(data[key])}`}
            data={data[key]}
            key={key}
          />
        ))}
      {deleted && <ButtonDelete handleClick={() => setModalOpen(true)} />}
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={() => setModalOpen(false)}
        onConfirm={handleDelete}
        question="Etes-vous sûr·e de vouloir supprimer cet élément ? "
      />
    </article>
  );
}

BoardArticle.propTypes = {
  data: PropTypes.shape().isRequired,
  pathFront: PropTypes.string.isRequired,
  pathBack: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
};

export default BoardArticle;
