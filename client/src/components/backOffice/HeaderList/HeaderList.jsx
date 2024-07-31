import DivComponent from "../../divComponent/DivComponent";

function HeaderList() {
  return (
    <header className="company-card">
      <DivComponent className="company-info" data="Liens détails :" />
      <DivComponent className="company-info" data="Entreprise :" />
      <DivComponent className="company-info" data="Ville :" />
      <DivComponent className="company-info" data="Domaine d'activité :" />
      <DivComponent className="company-info-number" data="Nombre d'offres :" />
    </header>
  );
}

export default HeaderList;
