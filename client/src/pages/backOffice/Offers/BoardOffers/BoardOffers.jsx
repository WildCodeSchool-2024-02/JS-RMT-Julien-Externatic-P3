import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";
import Button from "../../../../components/UI/buttonComponent/ButtonComponent";
import Modal from "../../../../components/UI/Modal/Modal";
import OfferForm from "../../../../components/backOffice/Forms/OfferForm/OfferForm";
import SearchBar from "../../../../components/UI/searchBar/SearchBar";

import "./BoardOffers.css";

function BoardOffers() {
  const offers = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="button-back-office">
        <Button text="Nouvelle Offre" handleClick={openModal} css="" />
        <SearchBar path="/consultants/offres" />
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel="Formulaire d'ajout de nouvelle offre"
        Content={OfferForm}
        needCloseConfirm
        contentProps={{ setIsModalOpen }}
      />
      {offers.length !== 0 ? (
        <BoardList
          datas={offers}
          pathBack="offers"
          pathFront="/consultants/offres"
          deleted
        />
      ) : (
        <h2 className="no-result-search">
          Aucun element ne correspond à votre recherche
        </h2>
      )}
    </>
  );
}

export default BoardOffers;
