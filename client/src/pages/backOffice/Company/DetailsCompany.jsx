import { useLoaderData } from "react-router-dom";
import Details from "../../../components/backOffice/detailsComponent/Details";
import "./DetailsCompany.css";

function DetailsPage() {
  const companyDetails = useLoaderData;
  return (
    <section>
      <div>details page</div>
      <Details company={companyDetails} />
    </section>
  );
}

export default DetailsPage;
