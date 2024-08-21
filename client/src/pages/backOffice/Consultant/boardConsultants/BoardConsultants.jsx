import { useLoaderData } from "react-router-dom";
import BoardList from "../../../../components/backOffice/boardComponent/BoardList";

function BoardConsultant() {
  const consultants = useLoaderData();
  return <BoardList datas={consultants} path="/admin/consultants" deleted />;
}

export default BoardConsultant;
