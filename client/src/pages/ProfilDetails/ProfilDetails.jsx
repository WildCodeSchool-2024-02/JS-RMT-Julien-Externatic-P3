import { useLoaderData } from "react-router-dom";

import avatar from "../../assets/images/avatar.png";

function ProfilDetails() {
  const oneProfil = useLoaderData();

  return (
    <>
      <h1>Mon profil</h1>
      <img src={avatar} alt={oneProfil.firstname} />
      <section>
        <article>
          <p>{oneProfil.firstname}</p>
          <p>{oneProfil.lastname}</p>
          <p>{oneProfil.city}</p>
        </article>
        <article>
          <p>{oneProfil.mail}</p>
          <p>{oneProfil.phone}</p>
        </article>
        <article>
          <p>{oneProfil.description}</p>
        </article>
      </section>
    </>
  );
}

export default ProfilDetails;
