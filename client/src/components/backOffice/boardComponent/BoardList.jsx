import PropTypes from "prop-types";

import HeaderList from "../HeaderList/HeaderList";
import DivComponent from "../../divComponent/DivComponent";

import "./BoardList.css";

import logoLink from "../../../assets/icones/play-circle.svg";

function BoardList({ datas }) {
  return (
    <main>
      <section className="company-container">
        <HeaderList />
        {datas.map((company) => (
          <article key={company.id} className="company-card">
            <img src={logoLink} alt="Logo lien détail" />
            <DivComponent className="company-info" data={company.name} />
            <DivComponent className="company-info" data={company.head_office} />
            <DivComponent
              className="company-info"
              data={company.activity_area_name}
            />
            <DivComponent
              className="company-info-number"
              data={company.offer_count}
            />
          </article>
        ))}
      </section>
    </main>
  );
}

BoardList.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      head_office: PropTypes.string.isRequired,
      activity_area_name: PropTypes.string.isRequired,
      offer_count: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BoardList;
