import { useLoaderData } from "react-router-dom";

function ProfilDetails() {
  const oneProfil = useLoaderData();

  return <h1> {oneProfil.firstname} </h1>;
}

export default ProfilDetails;
