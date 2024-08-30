import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardCandidates() {
  const candidates = useLoaderData();
  return (
    <BoardList
      datas={candidates}
      path="/consultants/candidats"
      deleted={false}
    />
  );
}

export default BoardCandidates;
