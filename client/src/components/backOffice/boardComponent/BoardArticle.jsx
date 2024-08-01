import PropTypes from "prop-types";

import DivComponent from "../../divComponent/DivComponent";

import logoLink from "../../../assets/icones/play-circle.svg";

function BoardArticle({ data }) {
  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";

  return (
    <article className="company-card">
      <img src={logoLink} alt=`Logo lien détail ${data.id}` />
      {Object.keys(data)
        .filter((key) => key !== "id")
        .map((key) => (
          <DivComponent
            className={`${getCls(data[key])}`}
            data={data[key]}
            key={data[key]}
          />
        ))}
    </article>
  );
}

BoardArticle.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default BoardArticle;
