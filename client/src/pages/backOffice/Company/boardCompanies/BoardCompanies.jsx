import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <BoardList
      datas={companies}
      pathFront="/admin/entreprises"
      pathBack=""
      deleted={false}
    />
  );
}

export default BoardCompanies;
