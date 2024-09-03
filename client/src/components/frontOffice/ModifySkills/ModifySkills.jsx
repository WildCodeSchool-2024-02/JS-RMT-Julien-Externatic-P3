import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";

import FormSkills from "../Forms/FormSkills/FormSkills";
import connexion from "../../../services/connexion";

function ModifySkills() {
  const [technologies, setTechnologies] = useState([]);
  const { logedUser } = useExternatic();

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await connexion.get(
          `/api/users/${logedUser.id}/technologies`
        );
        setTechnologies(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des technologies :",
          error
        );
      }
    };

    fetchTechnologies();
  }, [logedUser]);

  return (
    <>
      <h2>Mes compétences :</h2>
      <ul>
        {technologies.map((tech) => (
          <li key={tech.technology_id}>{tech.technology}</li>
        ))}
      </ul>

      <article>
        <h2>Ajouter une compétence :</h2>
        <FormSkills />
      </article>
      <ToastContainer />
    </>
  );
}

export default ModifySkills;
