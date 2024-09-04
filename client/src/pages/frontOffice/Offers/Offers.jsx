import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

import connexion from "../../../services/connexion";

import Card from "../../../components/frontOffice/Card/Card";
import SelectComponent from "../../../components/UI/Form/selectComponent/SelectComponent";

import "./Offers.css";

function Offers() {
  const [offerData, setOfferData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        let url = "api/offers";
        if (selectCategory) {
          url += `?type=Category&category=${selectCategory}`;
        }
        const response = await connexion.get(url);
        setOfferData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOffers();
  }, [selectCategory]);

  return (
    <>
      <div className="offer-list-title">
        <h2 className="style-title-h2">Toutes les offres</h2>
      </div>
      <section className="offer-filter">
        <SelectComponent
          url="api/category"
          id="category_id"
          label="Categories :"
          defaultOpt="Toutes les offres"
          name="category_id"
          value={selectCategory}
          handleChange={(e) => setSelectCategory(e.target.value)}
          classBox=""
        />
      </section>
      <section className="offer-ul">
        {offerData.map((offer) => (
          <Card data={offer} key={offer.id} showStar />
        ))}
      </section>
      <ToastContainer />
    </>
  );
}

export default Offers;
