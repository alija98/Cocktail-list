import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { Link, link, useParams } from "react-router-dom";

export default function SingleCocktail() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.error();
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section className="single-cocktail">
        <Link to="/" className="button-back">
          Back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image}></img>
          <div className="drink-info"></div>
          <p>
              <span className="drink-data">Name :</span> {name}
          </p>
            <p>
              <span className="drink-data">Category :</span> {category}
            </p>
            <p>
              <span className="drink-data">Infor :</span> {info}
            </p>
            <p>
              <span className="drink-data">Glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">Ingridients :</span>
              {ingredients.map((item,index)=>{
                return <span key={index}>{item}</span>
              })}
            </p>
        </div>
      </section>
    );
  }
}
