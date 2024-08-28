import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import InputComponent from "../../../UI/Form/inputComponent/InputComponent";
import SubmitComponent from "../../../UI/buttonComponent/SubmitComponent";

import connexion from "../../../../services/connexion";
import "./FormCV.css";

function FormCV({ oneProfil }) {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmitModifyCv = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("CV", inputRef.current.files[0]);
      await connexion.put(`/api/profils/${oneProfil.user_id}/CV`, formData);
    } catch (error) {
      console.error("There was an error updating the profile!", error);
    }
    navigate(".", { replace: true });
  };

  return (
    <form onSubmit={handleSubmitModifyCv}>
      <InputComponent
        label="Ajoutez un nouveau CV : "
        inputName="cv"
        inputType="file"
        ref={inputRef}
        id="mail"
        classBox=""
        isRequired
      />
      <SubmitComponent text="Valider" css="button-submit" />
    </form>
  );
}

FormCV.propTypes = {
  oneProfil: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FormCV;
