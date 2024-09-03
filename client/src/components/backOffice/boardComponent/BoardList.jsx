import PropTypes from "prop-types";

import HeaderList from "./HeaderList";
import BoardArticle from "./BoardArticle";

import "./BoardList.css";

function BoardList({ datas, pathFront, pathBack, deleted }) {
  return (
    <section className="company-container">
      <HeaderList deleted={deleted} pathBack={pathBack} />
      {datas.map((item) => (
        <BoardArticle
          data={item}
          key={item.id}
          pathFront={pathFront}
          deleted={deleted}
          pathBack={pathBack}
        />
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
      offer_count: PropTypes.number,
    })
  ).isRequired,
  pathFront: PropTypes.string.isRequired,
  pathBack: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
};

export default BoardList;
