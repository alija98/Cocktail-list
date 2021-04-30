import React from "react";

function SearchForm() {
  return (
    <section className="search-section">
        <div className="search-section-container">
            <form className="search-form">
          <label htmlFor="name">Search your favorite cocktail</label> 
         <input type="text" 
         name="name"
         id="name"
        ></input>
      </form>
      </div>
    </section>
  );
}

export default SearchForm;
