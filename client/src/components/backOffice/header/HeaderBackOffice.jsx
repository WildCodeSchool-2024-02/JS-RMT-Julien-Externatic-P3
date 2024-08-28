import { useLocation } from "react-router-dom";

import "./HeaderBackOffice.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HeaderBackOffice() {
  const location = useLocation();
  const title = location.pathname.split("/");

  return (
    <header>
      <h1 className="header-back-office style-title-h1">
        {capitalizeFirstLetter(title[2])}
      </h1>
    </header>
  );
}

export default HeaderBackOffice;
