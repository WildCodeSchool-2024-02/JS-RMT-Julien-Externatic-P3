import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <main>
      <BoardList datas={companies} />
    </main>
  );
}

export default BoardCompanies;
