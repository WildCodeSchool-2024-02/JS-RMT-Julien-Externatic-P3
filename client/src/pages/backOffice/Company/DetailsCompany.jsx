import { useLoaderData } from "react-router-dom";

import H2p from "../../../components/UI/H2p";

import "./DetailsCompany.css";

function DetailsCompany() {
  const companyDetails = useLoaderData();

  return (
    <section className="container-info-company">
      <h1 className="styleTitleH1">{companyDetails.name}</h1>
      <section className="container-detail">
        <div className="container-detail-company">
          <H2p subtitle="Siege social :" data={companyDetails.head_office} />
          <H2p subtitle="Nombres d'employés :" data={companyDetails.size} />
          <H2p
            subtitle="Chiffres d'affaires :"
            data={companyDetails.sales_figure}
          />
          <H2p
            subtitle="Secteur d'activité :"
            data={companyDetails.activity_area_name}
          />
          <H2p subtitle="Valeurs :" data={companyDetails.company_values} />
          <H2p subtitle="Description :" data={companyDetails.description} />
        </div>
        <div className="container-detail-contact">
          <H2p
            subtitle="Nom du consultant :"
            data={companyDetails.consultant_name}
          />
          <H2p subtitle="Nom du contact :" data={companyDetails.contact_name} />
          <H2p subtitle="Téléphone :" data={companyDetails.contact_phone} />
          <H2p subtitle="Mail :" data={companyDetails.contact_mail} />
        </div>
      </section>
    </section>
  );
}

export default DetailsCompany;
