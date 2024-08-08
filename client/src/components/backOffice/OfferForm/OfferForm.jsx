import { useEffect, useState } from "react";
import Submit from "../../UI/buttonComponent/SubmitComponent";
import Textarea from "../../UI/Form/descriptionComponent/DescriptionComponent";
import Input from "../../UI/Form/inputComponent/InputComponent";
import Select from "../../UI/Form/selectComponent/SelectComponent";

import connexion from "../../../services/connexion";

const offerSample = {
  title: "",
  missions: "",
  profil_desc: "",
  benefits: "",
  city: "",
  salary: "",
  start_date: "",
  is_cadre: false,
  consultant_id: "",
  company_id: "",
  study_level_id: "",
  contract_id: "",
  work_time_id: "",
  work_format_id: "",
  category_id: "",
};

function OfferForm() {
  const [offer, setOffer] = useState(offerSample);
  const [contractList, setContractList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [workTimeList, setWorkTimeList] = useState([]);
  const [workFormatList, setWorkFormatList] = useState([]);
  const [studyLevelList, setStudyLevelList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      try {
        const contracts = await connexion.get(`api/contract`);
        setContractList(contracts.data);
        const category = await connexion.get(`api/category`);
        setCategoryList(category.data);
        const workTime = await connexion.get(`api/workTime`);
        setWorkTimeList(workTime.data);
        const workFormat = await connexion.get(`api/workFormat`);
        setWorkFormatList(workFormat.data);
        const studyLevel = await connexion.get(`api/studyLevel`);
        setStudyLevelList(studyLevel.data);
        const companies = await connexion.get(`api/companies/minList`);
        setCompanyList(companies.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
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
        options={studyLevelList}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="contract_id"
        label="Type de contrat"
        defaultOpt="Choisir une option"
        name="contract_id"
        value={offer.contract_id}
        options={contractList}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="company_id"
        label="Entreprise"
        defaultOpt="Choisir une option"
        name="company_id"
        value={offer.company_id}
        options={companyList}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="work_time_id"
        label="Temps de trvail"
        defaultOpt="Choisir une option"
        name="work_time_id"
        value={offer.work_time_id}
        options={workTimeList}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="work_format_id"
        label="format"
        defaultOpt="Choisir une option"
        name="work_format_id"
        value={offer.work_format_id}
        options={workFormatList}
        handleChange={handleChange}
        classBox=""
      />
      <Select
        id="category_id"
        label="Domaine"
        defaultOpt="Choisir une option"
        name="category_id"
        value={offer.category_id}
        options={categoryList}
        handleChange={handleChange}
        classBox=""
      />
      <Submit text="Valider" css="" handleClick={handleSubmit} />
    </form>
  );
}

export default OfferForm;
