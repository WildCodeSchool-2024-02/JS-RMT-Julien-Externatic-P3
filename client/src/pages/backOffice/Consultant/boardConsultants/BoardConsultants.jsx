import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import BoardList from "../../../../components/backOffice/boardComponent/BoardList";
import SearchBar from "../../../../components/UI/searchBar/SearchBar";
import Modal from "../../../../components/UI/Modal/Modal";
import ConsultantForm from "../../../../components/backOffice/Forms/ConsultantForm/ConsultantForm";
import Button from "../../../../components/UI/buttonComponent/ButtonComponent";

function BoardConsultant() {
  const consultants = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="button-back-office">
        <Button text="Nouveau consultant" handleClick={openModal} css="" />
        <SearchBar path="/admin/consultants" />
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel="Formulaire d'ajout d'un consultant'"
        Content={ConsultantForm}
        needCloseConfirm
        contentProps={{ setIsModalOpen }}
      />
      {consultants.length !== 0 ? (
        <BoardList datas={consultants} pathFront="/admin/consultants" deleted />
      ) : (
        <h2 className="no-result-search">
          Aucun element ne correspond à votre recherche
        </h2>
      )}
    </>
  );
}

export default BoardConsultant;
