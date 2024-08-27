import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import connexion from "../../../../services/connexion";

import avatar from "../../../../assets/icones/user-black.svg";
import ParagraphElement from "../../../../components/UI/ParagraphElement/ParagraphElement";

import "./DetailsCandidate.css";

function DetailsCandidate() {
  const oneProfil = useLoaderData();
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    // Fonction pour récupérer les technologies du candidat
    const fetchTechnologies = async () => {
      try {
        const response = await connexion.get(
          `/api/technology?type=ByCandidat&id=${oneProfil.user_id}`
        );
        setTechnologies(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTechnologies();
  }, [oneProfil.user_id]); // Dépendance sur user_id pour exécuter l'effet à chaque changement
  return (
    <>
      <header className="detail-header">
        <h1 className="style-title-h1 ">
          {oneProfil.firstname} {oneProfil.lastname} ({oneProfil.city})
        </h1>
        <img
          src={avatar}
          alt={oneProfil.firstname}
          className="detail-profil-avatar"
        />
      </header>
      <section className="detail-profil-candidat">
        <section className="contact-description">
          <fieldset className="fieldset-profil detail-contact-back">
            <legend className="legend-form">Contact</legend>
            <ParagraphElement
              className="paragraph-style"
              data={oneProfil.phone}
            />
            <ParagraphElement
              className="paragraph-style"
              data={oneProfil.mail}
            />
            <a
              href={oneProfil.github}
              className="paragraph-style"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={oneProfil.linkedin}
              className="paragraph-style"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </fieldset>
          <fieldset className="fieldset-profil detail-description-back">
            <legend className="legend-form">Description</legend>
            <ParagraphElement
              className="paragraph-style"
              data={oneProfil.description}
            />
          </fieldset>
        </section>
        <fieldset className="fieldset-profil detail-skills-back">
          <legend className="legend-form">Compétences</legend>

          {technologies.length > 0 ? (
            <ul className="list-skills">
              {technologies.map((tech) => (
                <ParagraphElement
                  className="paragraph-style"
                  key={tech.id}
                  data={tech.tech}
                />
              ))}
            </ul>
          ) : (
            <ParagraphElement
              className="paragraph-style"
              data="Aucune compétence trouvée."
            />
          )}
        </fieldset>
      </section>
    </>
  );
}

export default DetailsCandidate;
