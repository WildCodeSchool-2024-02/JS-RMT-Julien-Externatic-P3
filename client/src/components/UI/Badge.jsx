import PropTypes from "prop-types";

function Badge({ src, alt, text }) {
  return (
    <section className="badge-offer-card">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </section>
  );
}

Badge.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Badge;
