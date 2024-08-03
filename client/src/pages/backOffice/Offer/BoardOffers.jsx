import Modal from "../../../components/UI/Modal";
import NewOfferForm from "../../../components/backOffice/NewOfferForm/NewOfferForm";

function BoardOffers() {
  return (
    <main>
      <Modal
        buttonLabel="open"
        ContentLabel="Formulaire d'ajout nouvelle offre"
        Content={NewOfferForm}
      />
    </main>
  );
}

export default BoardOffers;
