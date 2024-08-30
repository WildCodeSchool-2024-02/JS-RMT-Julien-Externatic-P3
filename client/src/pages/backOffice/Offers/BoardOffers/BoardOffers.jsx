import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";
import Button from "../../../../components/UI/buttonComponent/ButtonComponent";
import Modal from "../../../../components/UI/Modal/Modal";
import OfferForm from "../../../../components/backOffice/Forms/OfferForm/OfferForm";

function BoardOffers() {
  const offers = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Button text="Nouvelle Offre" handleClick={openModal} css="" />
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel="Formulaire d'ajout de nouvelle offre"
        Content={OfferForm}
        contentType="form"
        contentProps={{ setIsModalOpen }}
      />
      <BoardList datas={offers} path="/consultants/offres" deleted={false} />
    </>
  );
}

export default BoardOffers;
