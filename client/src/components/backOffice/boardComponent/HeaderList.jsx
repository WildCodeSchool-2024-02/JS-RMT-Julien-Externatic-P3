import { useLoaderData } from "react-router-dom";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import trad from "../../../assets/lang/trad.json";

function HeaderList() {
  const data = useLoaderData();

  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";
  return (
    <section className="company-card">
      <ParagraphElement className="company-info" data="Liens détails :" />
      <ParagraphElement className="company-info" data="Supprimer :" />
      {Object.keys(data[0])
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={getCls(data[0][key])}
            data={`${trad[key]} :`}
            key={trad[key]}
          />
        ))}
    </section>
  );
}

export default HeaderList;
