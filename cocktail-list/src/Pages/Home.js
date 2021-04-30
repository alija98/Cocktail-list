import React from "react";
import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";

function Home() {
  return (
    <>
      <SearchForm></SearchForm>
      <CocktailList></CocktailList>
    </>
  );
}

export default Home;
