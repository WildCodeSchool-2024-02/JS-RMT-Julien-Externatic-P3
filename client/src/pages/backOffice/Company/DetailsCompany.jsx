import { useLoaderData } from "react-router-dom";
import Details from "../../../components/backOffice/detailsComponent/Details";
import "./DetailsCompany.css";

function DetailsCompany() {
  const companyDetails = useLoaderData();
  const subtitle = [
    "Siege social :",
    "Nombres d'employés :",
    "Chiffres d'affaires :",
    "€/ Annuel",
    "Secteur d'activité :",
    "Valeurs :",
    "Description :",
    "Nom du consultant :",
    "Nom du contact :",
    "Téléphone du Contact :",
    "Mail du contact :",
  ];
  return (
    <Details
      data={companyDetails}
      subtitle={subtitle}
      className="container-info-company"
    />
  );
}

export default DetailsCompany;
