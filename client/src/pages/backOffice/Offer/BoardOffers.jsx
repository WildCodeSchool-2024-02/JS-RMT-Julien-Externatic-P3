import { useState } from "react";
import Modal from "../../../components/UI/Modal";
import NewOfferForm from "../../../components/backOffice/NewOfferForm/NewOfferForm";

function BoardOffers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <main>
      <button type="button" onClick={openModal}>
        Ouvrir Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        openFunc={setIsModalOpen}
        contentLabel="Formulaire d'ajout nouvelle offre"
        Content={NewOfferForm}
        contentType="form"
      />
    </main>
  );
}

export default BoardOffers;
