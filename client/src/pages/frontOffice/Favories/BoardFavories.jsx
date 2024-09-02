import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardFavories() {
  const offers = useLoaderData();

  return (
    <BoardList datas={offers} path="" deleted={false} />
  );
}

export default BoardFavories;
