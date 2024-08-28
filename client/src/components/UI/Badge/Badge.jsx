import PropTypes from "prop-types";

import "./Badge.css";

function Badge({ src, alt, text, clss }) {
  return (
    <section className={clss}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </section>
  );
}

Badge.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clss: PropTypes.string.isRequired,
};

export default Badge;
