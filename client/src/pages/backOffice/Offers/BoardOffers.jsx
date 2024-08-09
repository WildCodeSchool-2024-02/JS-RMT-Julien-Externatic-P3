import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardOffers() {
  const offers = useLoaderData();

  return <BoardList datas={offers} path="/consultants/offres" />;
}

export default BoardOffers;
