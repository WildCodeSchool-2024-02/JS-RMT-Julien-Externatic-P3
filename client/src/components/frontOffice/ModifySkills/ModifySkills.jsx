import { ToastContainer } from "react-toastify";
import FormSkills from "../Forms/FormSkills/FormSkills";

function ModifySkills() {
  return (
    <>
      <h2>Mes compétences :</h2>

      <article>
        <h2>Ajouter une compétence :</h2>
        <FormSkills />
      </article>
      <ToastContainer />
    </>
  );
}

export default ModifySkills;
