import PropTypes from "prop-types";

import "./Badge.css";

function Badge({ src, alt, text, clsi, clss }) {
  return (
    <section className={clss}>
      <div className={clsi}>
        <img src={src} alt={alt} />
      </div>
      <p>{text}</p>
    </section>
  );
}

Badge.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clsi: PropTypes.string.isRequired,
  clss: PropTypes.string.isRequired,
};

export default Badge;
