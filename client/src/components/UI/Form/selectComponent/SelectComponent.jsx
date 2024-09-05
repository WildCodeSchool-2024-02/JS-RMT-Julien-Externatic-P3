import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useExternatic } from "../../../../context/ExternaticContext";

import connexion from "../../../../services/connexion";
import "./SelectComponent.css";

function SelectComponent({
  url,
  id,
  label,
  defaultOpt,
  data,
  value,
  classBox,
}) {
  const [options, setOptions] = useState([]);
  const [newStatus, setNewStatus] = useState(value);
  const { selectedOffer } = useExternatic();

  const getOptions = async (path) => {
    try {
      const myOptions = await connexion.get(path);
      setOptions(myOptions.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleSelectChange = async (e) => {
    const selectedStatus = e.target.value;

    try {
      await connexion.put(`/api/candidacy`, {
        status_id: selectedStatus,
        candidate_id: data.id,
        offer_id: selectedOffer,
      });
      setNewStatus(selectedStatus);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
    }
  };

  useEffect(() => {
    getOptions(url);
  }, [url]);

  return (
    <div className={classBox}>
      <label htmlFor={id}> {label} </label>
      <select id={id} value={newStatus} onChange={handleSelectChange}>
        <option value="">{defaultOpt}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectComponent.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOpt: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
  value: PropTypes.number.isRequired,
  classBox: PropTypes.string.isRequired,
};

export default SelectComponent;
