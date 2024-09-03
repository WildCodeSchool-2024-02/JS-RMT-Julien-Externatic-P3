import { useLoaderData } from "react-router-dom";

import ParagraphElement from "../../UI/ParagraphElement/ParagraphElement";

import trad from "../../../assets/lang/trad.json";

function HeaderList() {
  const data = useLoaderData();
  const labels = Array.isArray(data) ? data : data.candidacies;

  const gridTemplate = {
    gridTemplateColumns: `repeat(${Object.keys(labels[0]).length}, 1fr)`,
  };

  const getCls = (value) =>
    typeof value === "number" ? "company-info-number" : "company-info";

  return (
    <section className="company-card" style={gridTemplate}>
      <ParagraphElement className="company-info" data="Liens détails :" />
      {Object.keys(labels[0])
        .filter((key) => key !== "id")
        .map((key) => (
          <ParagraphElement
            className={getCls(labels[0][key])}
            data={`${trad[key]} :`}
            key={trad[key]}
          />
        ))}
    </section>
  );
}

export default HeaderList;
