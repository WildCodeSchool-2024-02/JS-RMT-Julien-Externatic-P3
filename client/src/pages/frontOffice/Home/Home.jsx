import { useLoaderData } from "react-router-dom";

import acceuilExt from "../../../assets/images/externatic-acceuil.jpg";
import ShowElement from "../../../components/UI/ShowElement/ShowElement";

import "./Home.css";

function Home() {
  const [consultants, offers] = useLoaderData();
  console.info(offers);

  return (
    <>
      <article className="container-presentation">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugiat sit eaque eius voluptatem minus voluptas, hic omnis ipsum
          adipisci earum repellendus quia iure atque laudantium rem aliquam
          reiciendis error. Est nihil, assumenda quis exercitationem tenetur
          impedit perspiciatis recusandae nulla libero laborum.
          <br />
          Nulla exercitationem reprehenderit saepe sit veritatis ex minima porro
          totam illum tenetur! Ipsa ipsam explicabo distinctio nisi libero?
          Laudantium ducimus omnis ut cumque accusantium molestias quisquam,
          minima inventore, veniam fugit iste eaque! In quo minima accusamus?
          Eveniet, tempore repellendus quaerat tempora natus non nostrum hic
          dolores.
        </p>
        <img src={acceuilExt} alt="Espace de l'acceuil de la société" />
      </article>
      <h2>Nos offres du moments</h2>
      <article className="container-presentation">
        <img src={acceuilExt} alt="Espace détente de la société" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugiat sit eaque eius voluptatem minus voluptas, hic omnis ipsum
          adipisci earum repellendus quia iure atque laudantium rem aliquam
          reiciendis error. Est nihil, assumenda quis exercitationem tenetur
          impedit perspiciatis recusandae nulla libero laborum.
          <br /> Nulla exercitationem reprehenderit saepe sit veritatis ex
          minima porro totam illum tenetur! Ipsa ipsam explicabo distinctio nisi
          libero? Laudantium ducimus omnis ut cumque accusantium molestias
          quisquam, minima inventore, veniam fugit iste eaque! In quo minima
          accusamus? Eveniet, tempore repellendus quaerat tempora natus non
          nostrum hic dolores. Temporibus, optio! Autem dignissimos commodi
          provident dolorum incidunt perspiciatis nesciunt distinctio ullam,
          debitis dicta
        </p>
      </article>
      <section className="container-value">
        <div>
          <p className="number-value">40</p>
          <p>lorem lorem</p>
        </div>
        <div>
          <p className="number-value">+ 400</p>
          <p>lorem lorem</p>
        </div>
        <div>
          <p className="number-value">85%</p>
          <p>lorem lorem</p>
        </div>
        <div>
          <p className="number-value">+ 4000</p>
          <p>lorem lorem</p>
        </div>
      </section>
      <section className="container-acceuil-consultant">
        {consultants.map((consultant) => (
          <ShowElement profile={consultant} key={consultant.id} />
        ))}
      </section>
      <h2>Nos entreprises partenaires</h2>
    </>
  );
}

export default Home;
