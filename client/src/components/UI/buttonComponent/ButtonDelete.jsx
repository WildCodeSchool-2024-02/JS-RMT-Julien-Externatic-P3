import PropTypes from "prop-types";

import logoBin from "../../../assets/icones/trash-2.svg";
import "./ButtonDelete.css";

function ButtonDelete({ handleClick }) {
  return (
    <button type="button" className="button-delete" onClick={handleClick}>
      <img src={logoBin} alt="Corbeille supprimer" />
    </button>
  );
}
ButtonDelete.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ButtonDelete;
