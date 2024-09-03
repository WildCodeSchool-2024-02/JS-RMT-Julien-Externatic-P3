import { useLoaderData } from "react-router-dom";
import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardConsultant() {
  const consultants = useLoaderData();

  return consultants.length !== 0 ? (
    <BoardList
      datas={consultants}
      pathFront="/admin/consultants"
      pathBack="users"
      deleted
    />
  ) : (
    <h2>Il n'y a pas de consultants</h2>
  );
}

export default BoardConsultant;
