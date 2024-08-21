import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import trad from "../../../assets/lang/trad.json";

function HeaderList({ deleted }) {
  const data = useLoaderData();
  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";
  return (
    <section className="company-card">
      <ParagraphElement className="company-info" data="Liens détails :" />
      {deleted && (
        <ParagraphElement className="company-info" data="Supprimer :" />
      )}
      {Object.keys(data[0])
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={getCls(data[0][key])}
            data={`${trad[key]} :`}
            key={trad[key]}
          />
        ))}
    </section>
  );
}
HeaderList.propTypes = {
  deleted: PropTypes.bool.isRequired,
};

export default HeaderList;
