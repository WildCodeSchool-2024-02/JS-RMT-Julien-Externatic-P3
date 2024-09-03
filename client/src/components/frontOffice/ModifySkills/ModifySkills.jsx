import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useExternatic } from "../../../context/ExternaticContext";

import FormSkills from "../Forms/FormSkills/FormSkills";
import errorToast from "../../UI/toaster/errorToast";
import successToast from "../../UI/toaster/successToast";
import connexion from "../../../services/connexion";
import "./ModifySkills.css";
import x from "../../../assets/icones/X-red.svg";

function ModifySkills() {
  const [technologies, setTechnologies] = useState([]);
  const { logedUser } = useExternatic();

  const fetchTechnologies = async () => {
    try {
      const response = await connexion.get(
        `/api/users/${logedUser.id}/technologies`
      );
      setTechnologies(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des technologies :", error);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const handleDelete = async (technologyId) => {
    try {
      const response = await connexion.delete(`/api/technologyCandidate`, {
        data: {
          technologyId,
          candidateId: logedUser.id,
        },
      });

      if (response.status === 204) {
        setTechnologies(
          technologies.filter((tech) => tech.technology_id !== technologyId)
        );
        successToast("Compétence supprimée avec succès !");
      } else {
        errorToast("Erreur lors de la suppression de la compétence.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la compétence :", error);
      errorToast("Erreur lors de la suppression de la compétence.");
    }
  };

  return (
    <section className="skills-section">
      <article className="add-skills-container">
        <h2 className="style-title-h2 skills-title">Mes compétences :</h2>
        {technologies.length === 0 ? (
          <p className="paragraph-style">
            Vous n'avez pas encore ajouté de compétences.
          </p>
        ) : (
          <ul className="skills-container">
            {technologies.map((tech) => (
              <li key={tech.technology_id}>
                <button
                  onClick={() => handleDelete(tech.technology_id)}
                  type="button"
                >
                  {tech.technology}
                  <img src={x} alt="croix suppression" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </article>
      <article className="add-skills-container">
        <h2 className="style-title-h2 skills-title">
          Ajouter une compétence :
        </h2>
        <FormSkills fetchTechnologies={fetchTechnologies} />
      </article>
      <ToastContainer />
    </section>
  );
}

export default ModifySkills;
