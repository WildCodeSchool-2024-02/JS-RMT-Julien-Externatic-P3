import PropTypes from "prop-types";

import userRose from "../../../assets/icones/users-rose.svg";

function ShowElement({ profile }) {
  return (
    <article>
      <img src={userRose} alt={`Illustration de ${profile.fullname}`} />
      <h3>{profile.fullname}</h3>
      <p>{profile.description}</p>
    </article>
  );
}

ShowElement.propTypes = {
  profile: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowElement;
