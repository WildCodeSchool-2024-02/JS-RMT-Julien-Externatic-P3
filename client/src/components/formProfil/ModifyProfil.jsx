import { useState } from "react";

import InputComponent from "./UI/InputComponent";
import DescriptionComponent from "./UI/DescriptionComponent";
import ButtonComponent from "./UI/buttonComponent";

import connexion from "../../services/connexion";
import "./ModifyProfil.css";

const initialProfile = {
  firstname: "",
  lastname: "",
  city: "",
  phone: "",
  mail: "",
  description: "",
};

function ProfileModify() {
  const [profile, setProfile] = useState(initialProfile);
  const id = 1;

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmitModify = async (e) => {
    e.preventDefault();
    try {
      await connexion.put(`/api/profils/${id}`, profile);
    } catch (error) {
      console.error("There was an error updating the profile!", error);
    }
    setProfile((prev) => ({
      ...prev,
    }));
  };

  return (
    <div className="form-profil">
      <h1>Modify Profile</h1>
      <form onSubmit={handleSubmitModify}>
        <fieldset className="fildset-profil">
          <legend className="legend-form">Information Personel</legend>
          <InputComponent
            label="First Name"
            type="text"
            name="firstname"
            value={profile.firstname}
            onChange={handleProfileChange}
          />
          <InputComponent
            label="Last Name"
            type="text"
            name="lastname"
            value={profile.lastname}
            onChange={handleProfileChange}
          />
          <InputComponent
            label="City"
            type="text"
            name="city"
            value={profile.city}
            onChange={handleProfileChange}
          />
        </fieldset>
        <fieldset className="fildset-profil">
          <legend className="legend-form">Contact</legend>
          <InputComponent
            label="Phone Number"
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
          />
          <InputComponent
            label="Email"
            type="email"
            name="mail"
            value={profile.mail}
            onChange={handleProfileChange}
          />
        </fieldset>
        <fieldset className="fildset-profil">
          <legend className="legend-form">Description</legend>
          <DescriptionComponent
            name="description"
            value={profile.description}
            onChange={handleProfileChange}
          />
          <ButtonComponent
            text="Submit"
            handleClick={handleSubmitModify}
            btntype="submit"
            className="button-submit"
          />
        </fieldset>
      </form>
    </div>
  );
}

export default ProfileModify;
