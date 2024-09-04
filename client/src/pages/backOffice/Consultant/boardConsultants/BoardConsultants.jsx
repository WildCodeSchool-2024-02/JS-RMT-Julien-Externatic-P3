import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";
import SearchBar from "../../../../components/UI/searchBar/SearchBar";

function BoardConsultant() {
  const consultants = useLoaderData();

  return (
    <>
      <section className="section-search">
        <SearchBar path="/admin/consultants" />
      </section>
      {consultants.length !== 0 ? (
        <BoardList datas={consultants} pathFront="/admin/consultants" deleted />
      ) : (
        <h2 className="no-result-search">
          Aucun element ne correspond à votre recherche
        </h2>
      )}
    </>
  );
}

export default BoardConsultant;
