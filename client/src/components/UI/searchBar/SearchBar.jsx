import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ path }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("filter") || "";
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    navigate(`${path}?filter=${value}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Rechercher par titre, catégorie ou nom..."
      />
    </div>
  );
}

SearchBar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SearchBar;
