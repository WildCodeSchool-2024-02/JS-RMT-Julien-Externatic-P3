import PropTypes from "prop-types";
import "./Details.css";

function Details({ data, subtitle, className }) {
  return (
    <section className={className}>
      <h1 className="styleTitleH1">{data.name}</h1>
      <section className="container-detail">
        <div className="container-detail-company">
          <h2 className="styleTitleH2">{subtitle[0]}</h2>
          <p>{data.head_office}</p>
          <h2 className="styleTitleH2">{subtitle[1]}</h2>
          <p>{data.size}</p>
          <h2 className="styleTitleH2">{subtitle[2]}</h2>
          <p>
            {data.sales_figure} {subtitle[3]}
          </p>
          <h2 className="styleTitleH2">{subtitle[4]}</h2>
          <p>{data.activity_area_name}</p>
          <h2 className="styleTitleH2">{subtitle[5]}</h2>
          <p>{data.company_values}</p>
          <h2 className="styleTitleH2">{subtitle[6]}</h2>
          <p>{data.description}</p>
        </div>
        <div className="container-detail-contact">
          <h3 className="styleTitleH3">{subtitle[7]}</h3>
          <p>{data.consultant_name}</p>
          <h3 className="styleTitleH3">{subtitle[8]}</h3>
          <p>{data.contact_name}</p>
          <h3 className="styleTitleH3">{subtitle[9]}</h3>
          <p>{data.contact_phone}</p>
          <h3 className="styleTitleH3">{subtitle[10]}</h3>
          <p>{data.contact_mail}</p>
        </div>
      </section>
    </section>
  );
}

Details.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    head_office: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    sales_figure: PropTypes.number.isRequired,
    activity_area_name: PropTypes.string.isRequired,
    company_values: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    consultant_name: PropTypes.string.isRequired,
    contact_name: PropTypes.string.isRequired,
    contact_phone: PropTypes.string.isRequired,
    contact_mail: PropTypes.string.isRequired,
  }).isRequired,
  subtitle: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default Details;
