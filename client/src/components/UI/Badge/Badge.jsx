import PropTypes from "prop-types";

import "./Badge.css";

function Badge({ src, alt, text, clss }) {
  return (
    <section className={clss}>
      <div>
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
  clss: PropTypes.string.isRequired,
};

export default Badge;
