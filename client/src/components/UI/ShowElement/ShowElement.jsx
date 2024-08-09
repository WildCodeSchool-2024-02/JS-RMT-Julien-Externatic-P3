import PropTypes from "prop-types";

import userRose from "../../../assets/icones/users-rose.svg";

function ShowElement({ data }) {
  return (
    <article>
      <img src={userRose} alt={`Illustration de ${data.fullname}`} />
      <h3>{data.fullname}</h3>
      <p>{data.description}</p>
    </article>
  );
}

ShowElement.propTypes = {
  data: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowElement;
