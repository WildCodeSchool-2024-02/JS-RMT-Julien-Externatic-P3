import { useLoaderData } from "react-router-dom";

import BoardList from "../../../components/backOffice/boardComponent/BoardList";

import "./BoardCompanies.css";

function BoardCompanies() {
  const companies = useLoaderData();
  return (
    <div>
      <BoardList company={companies} />
    </div>
  );
}

export default BoardCompanies;
