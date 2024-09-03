import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <BoardList datas={companies} path="/admin/entreprises" deleted={false} />
  );
}

export default BoardCompanies;
