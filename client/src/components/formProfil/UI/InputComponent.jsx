import PropTypes from 'prop-types';
import './InputComponent.css';

function InputComponent({ label, type, name, value, onChange }) {
  return (
    <div className="input-profil">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;



