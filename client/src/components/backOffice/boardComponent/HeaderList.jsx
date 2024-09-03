import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import trad from "../../../assets/lang/trad.json";

function HeaderList({ deleted, pathBack }) {
  const data = useLoaderData();

  const labels = Array.isArray(data) ? data : data.candidacies;

  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";

  return (
    <section
      className={`company-card ${pathBack === "offers" ? "offers-case" : ""}`}
    >
      <ParagraphElement className="company-info" data="Liens détails :" />
      {Object.keys(labels[0])
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={getCls(labels[0][key])}
            data={`${trad[key]} :`}
            key={trad[key]}
          />
        ))}
      {deleted && <ParagraphElement className="company-info" data="" />}
    </section>
  );
}
HeaderList.propTypes = {
  deleted: PropTypes.bool.isRequired,
  pathBack: PropTypes.string.isRequired,
};

export default HeaderList;
