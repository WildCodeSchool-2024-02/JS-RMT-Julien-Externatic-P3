import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import HeaderList from "./HeaderList";
import BoardArticle from "./BoardArticle";

import "./BoardList.css";

function BoardList({ datas, path }) {
  return (
    <section className="company-container">
      <HeaderList />
      {datas.map((item) => (
        <Link to={`${path}/${item.id}`} key={item.id}>
          <BoardArticle data={item} />
        </Link>
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
  path: PropTypes.string.isRequired,
};

export default BoardList;
