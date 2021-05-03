import React, { useRef } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => searchValue.current.focus(), []);
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search-section">
      <div className="search-section-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
