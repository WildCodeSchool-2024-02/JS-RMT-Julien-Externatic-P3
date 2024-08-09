import PropTypes from "prop-types";

import HeaderList from "./HeaderList";
import BoardArticle from "./BoardArticle";

import "./BoardList.css";

function BoardList({ datas, path }) {
  return (
    <section className="company-container">
      <HeaderList />
      {datas.map((item) => (
          <BoardArticle data={item} key={item.id} path={path}/>
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
