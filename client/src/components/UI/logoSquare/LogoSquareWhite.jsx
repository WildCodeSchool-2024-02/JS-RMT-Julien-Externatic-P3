import logoSquareWhite from "../../../assets/icones/square-white.svg";

import "./LogoSquareWhite.css";

function LogoSquareWhite() {
  return (
    <li className="nav-square-white">
      <img src={logoSquareWhite} alt="logo menu" />
      <img src={logoSquareWhite} alt="logo menu" />
      <img src={logoSquareWhite} alt="logo menu" />
      <img src={logoSquareWhite} alt="logo menu" />
    </li>
  );
}

export default LogoSquareWhite;
