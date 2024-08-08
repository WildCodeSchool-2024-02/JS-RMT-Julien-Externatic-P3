import PropTypes from "prop-types";

import userRose from "../../../assets/icones/users-rose.svg";

function ShowElement({ data }) {
  return (
    <article>
      <img src={userRose} alt={`Illustration de ${data.fullname}`} />
      <h3>{data.fullname}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio ab
        animi eos modi eum itaque sapiente incidunt eaque beatae veritatis hic
        illum repellat nobis consequatur aliquid, sequi quaerat mollitia?
      </p>
    </article>
  );
}

ShowElement.propTypes = {
  data: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowElement;
