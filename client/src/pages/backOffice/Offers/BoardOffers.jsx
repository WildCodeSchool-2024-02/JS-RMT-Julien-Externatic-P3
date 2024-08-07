import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardOffers() {
  const offers = useLoaderData();

  return (
    <main>
      <BoardList datas={offers} path="/consultants/offres" />
    </main>
  );
}

export default BoardOffers;
