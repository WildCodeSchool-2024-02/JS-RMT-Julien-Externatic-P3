import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ path }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get("filter") || "";
  const [query, setQuery] = useState(initialQuery);
  const [timeOutId, setTimeOutId] = useState(null);

  useEffect(() => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    const timeId = setTimeout(() => {
      navigate(`${path}?filter=${query}`);
    }, 250);
    setTimeOutId(timeId);

    return () => clearTimeout(timeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
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
