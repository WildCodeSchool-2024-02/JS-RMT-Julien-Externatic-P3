import PropTypes from 'prop-types';

function OfferCard({ item }) {
  return (
    <div className="offer-card">
      <h2>{item.title}</h2>
      <h3>{item.city}</h3>
      <h3>{item.salary}</h3>
    </div>
  )
}

OfferCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired,
};

export default OfferCard
