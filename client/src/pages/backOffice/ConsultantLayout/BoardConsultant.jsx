import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardConsultant() {
  const offers = useLoaderData();
  const formatOffers = offers.map((offer) => ({
    ...offer,
    on_updated_at: offer.on_updated_at.split("T")[0],
  }));

  return (
    <main>
      <BoardList datas={formatOffers} />
    </main>
  );
}

export default BoardConsultant;
