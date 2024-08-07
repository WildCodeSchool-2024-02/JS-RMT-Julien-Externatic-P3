import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <main>
      <BoardList datas={companies} path="entreprises" />
    </main>
  );
}

export default BoardCompanies;
