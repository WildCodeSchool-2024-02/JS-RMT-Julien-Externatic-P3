import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

import { useExternatic } from "../../../../context/ExternaticContext";

function BoardCompanies() {
  const { logedUser } = useExternatic();
  const companies = useLoaderData();
  return (
    <section>
      {companies.length !== 0 ? (
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
      ) : (
        <h2 className="no-result-search">
          Aucun element ne correspond à votre recherche
        </h2>
      )}
    </section>
  );
}

export default BoardCompanies;
