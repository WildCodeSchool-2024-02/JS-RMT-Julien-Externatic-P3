import { useLoaderData } from "react-router-dom";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";
import SearchBar from "../../../../components/UI/searchBar/SearchBar";

import "./BoardCandidates.css";

function BoardCandidates() {
  const candidates = useLoaderData();
  return (
    <>
      <section className="section-search">
        <SearchBar path="/consultants/candidats" />
      </section>
      {candidates.length !== 0 ? (
        <BoardList
          datas={candidates}
          path="/consultants/candidats"
          deleted={false}
        />
      ) : (
        <h2 className="no-result-search">
          Aucun element ne correspond à votre recherche
        </h2>
      )}
    </>
  );
}

export default BoardCandidates;
