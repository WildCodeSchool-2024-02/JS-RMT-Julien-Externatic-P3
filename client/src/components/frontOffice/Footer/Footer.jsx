import "./Footer.css";
import logo from "../../../assets/images/ExternaticLogoNoir.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description">
        <h3 className="externatic-h3">
          Externatic, cabinet de recrutement informatique Externatic est un
          cabinet dédié au recrutement de profils d’experts, ingénieurs et
          managers dans le domaine de l’informatique
        </h3>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Externatic" />
        <h5>Externatic © 2024 - Tous droits réservés</h5>
      </div>
      <div className="footer-contacts">
        <h4>Contact </h4>
        <p>Tél. +33 (0)1 23 45 67 89</p>
        <p>Mail : contact@externatic.fr</p>
        <p>Adresse : 1 rue Racine – 44000 NANTES – France</p>
      </div>
    </footer>
  );
}

export default Footer;
