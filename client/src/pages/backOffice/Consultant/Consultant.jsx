import { useLoaderData } from "react-router-dom";
import BoardList from "../../../components/backOffice/boardComponent/BoardList";

function Consultant() {
  const consultants = useLoaderData();
  return <BoardList datas={consultants} />;
}

export default Consultant;
