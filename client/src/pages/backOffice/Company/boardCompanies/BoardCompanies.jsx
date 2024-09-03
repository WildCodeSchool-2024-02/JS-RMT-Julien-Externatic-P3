import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

import { useExternatic } from "../../../../context/ExternaticContext";

function BoardCompanies() {
  const { logedUser } = useExternatic();
  const companies = useLoaderData();
  return (
    <BoardList
      datas={companies}
      pathFront={
        logedUser.role_id === 3
          ? "/admin/entreprises"
          : "/consultants/entreprises"
      }
      pathBack=""
      deleted={false}
    />
  );
}

export default BoardCompanies;
