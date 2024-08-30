import { useLoaderData, Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import acceuilExt from "../../../assets/images/externatic-acceuil.jpg";
import ShowElement from "../../../components/UI/ShowElement/ShowElement";
import OfferCard from "../../../components/frontOffice/OfferCard/OfferCard";
import ParagraphElement from "../../../components/UI/ParagraphElement/ParagraphElement";

import arrow from "../../../assets/icones/arrow-right.svg";
import chevronLeft from "../../../assets/icones/chevron-left.svg";
import chevronRight from "../../../assets/icones/chevron-right.svg";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";

function Home() {
  const [consultants, offers] = useLoaderData();

  const lastOffers = offers.map((offer) => (
    <OfferCard offer={offer} key={offer.id} />
  ));

  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="main-home-page">
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
      <AliceCarousel
        items={lastOffers}
        responsive={responsive}
        autoPlay
        autoPlayInterval={4000}
        infinite
        renderNextButton={() => (
          <img className="carrousel-next" src={chevronRight} alt="suivant" />
        )}
        renderPrevButton={() => (
          <img className="carrousel-prev" src={chevronLeft} alt="precedant" />
        )}
        autoWidth
      />
      <Link to="/offres" className="link-offers">
        <ParagraphElement
          data="Voir toutes les offres"
          className="text-link-offers"
        />
        <img src={arrow} alt="flèche vers la droite" />
      </Link>
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
    </div>
  );
}

export default Home;
