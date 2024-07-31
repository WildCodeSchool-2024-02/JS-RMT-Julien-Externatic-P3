import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <div>
      <BoardList datas={companies} />
    </div>
  );
}

export default BoardCompanies;
