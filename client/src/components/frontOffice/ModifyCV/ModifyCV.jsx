import PropTypes from "prop-types";

import FormCV from "../Forms/FormCV/FormCV";

import "./ModifyCV.css";

function ModifyCV({ contentProps }) {
  const { oneProfil } = contentProps;

  const zoomLevel = 50;
  const pdfUrlWithZoom = oneProfil.cv
    ? `${oneProfil.cv}#zoom=${zoomLevel}`
    : "";
  return (
    <>
      <FormCV oneProfil={oneProfil} />
      {oneProfil.cv ? (
        <iframe
          src={`${import.meta.env.VITE_API_URL}/${pdfUrlWithZoom}`}
          width="100%"
          height="700px"
          style={{ border: "none" }}
          title="PDF Viewer"
        >
          Votre navigateur ne peux pas lire le pdf changez de navigateur !
        </iframe>
      ) : (
        <h2 className="title-temporary">Vous n'avez pas encore de CV !</h2>
      )}
    </>
  );
}

ModifyCV.propTypes = {
  contentProps: PropTypes.shape({
    setCvModalOpen: PropTypes.func.isRequired,
    oneProfil: PropTypes.shape().isRequired,
  }).isRequired,
};

export default ModifyCV;
