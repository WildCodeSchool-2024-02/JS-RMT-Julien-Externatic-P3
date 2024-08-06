import PropTypes from "prop-types";

import HeaderList from "../HeaderList/HeaderList";
import BoardArticle from "./BoardArticle";

import "./BoardList.css";

function BoardList({ datas }) {
  return (
    <section className="company-container">
      <HeaderList />
      {datas.map((company) => (
        <BoardArticle data={company} key={company.id} />
      ))}
    </section>
  );
}

BoardList.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      head_office: PropTypes.string,
      activity_area_name: PropTypes.string,
      offer_count: PropTypes.string,
    })
  ).isRequired,
};

export default BoardList;
