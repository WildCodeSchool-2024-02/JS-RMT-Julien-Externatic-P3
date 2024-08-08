import { useState } from "react";
import Submit from "../../UI/buttonComponent/SubmitComponent";
import Textarea from "../../UI/Form/descriptionComponent/DescriptionComponent";
import Input from "../../UI/Form/inputComponent/InputComponent";
import Select from "../../UI/Form/selectComponent/SelectComponent";

const offerSample = {
  title: "New Offer",
  missions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
  profil_desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
  benefits:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ",
  city: "Rennes",
  salary: 2,
  start_date: "2024-08-01",
  is_cadre: true,
  consultant_id: 6,
  company_id: 1,
  study_level_id: 3,
  contract_id: 2,
  work_time_id: 1,
  work_format_id: 2,
  category_id: 1,
};

function OfferForm() {
  const [offer, setOffer] = useState(offerSample);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit="">
      <h1>Ajouter une offre</h1>
      <Input
        id="title"
        label="Titre"
        inputType="text"
        inputName="title"
        inputValue={offer.title}
        handleChange={handleChange}
        classBox=""
      />
      <Input
        id="city"
        label="Ville"
        inputType="text"
        inputName="city"
        inputValue={offer.city}
        handleChange={handleChange}
        classBox=""
      />
      <Input
        id="salary"
        label="Salaire"
        inputType="text"
        inputName="salary"
        inputValue={offer.salary}
        handleChange={handleChange}
        classBox=""
      />
      <Input
        id="start_date"
        label="Prise de poste"
        inputType="text"
        inputName="start_date"
        inputValue={offer.start_date}
        handleChange={handleChange}
        classBox=""
      />
      <Textarea
        id="missions"
        label="Détails de la mission"
        descriptionName="missions"
        description={offer.missions}
        handleChange={handleChange}
        classBox=""
      />
      <Textarea
        id="profil_desc"
        label="Profil recherché"
        descriptionName="profil_desc"
        description={offer.profil_desc}
        handleChange={handleChange}
        classBox=""
      />
      <Textarea
        id="benefits"
        label="Avantages"
        descriptionName="benefits"
        description={offer.benefits}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="study_level_id"
        label="Niveau d'études"
        defaultOpt="Choisir une option"
        name="study_level_id"
        value={offer.study_level_id}
        options={[]}
        handleChange={handleChange}
        classBox=""
      />
      <Submit text="Valider" css="" handleClick={handleSubmit} />
    </form>
  );
}

export default OfferForm;
