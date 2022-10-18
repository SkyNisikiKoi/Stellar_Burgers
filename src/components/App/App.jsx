import React, { useState, useEffect } from 'react';
import '../../index.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { api } from '../../utils/Api.js';
import BurgerIngredientsContext from "../../context/burger-ingredients-context";


export const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    api.loadCards()
      .then(
        (result) => {
          setIsLoaded(true);
          setIngredients({
            bun: result.data.filter(item => item.type === "bun"),
            main: result.data.filter(item => item.type === "main"),
            sauce: result.data.filter(item => item.type === "sauce"),
            useBun: result.data.filter(item => item.type === "bun")[0],
            ingredients: result.data.filter(item => item.type !== "bun"),
            all: result.data
          }
          );
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      .catch((err) => {
        console.log(err);
      });
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {

    return (
      <React.StrictMode>
        <AppHeader />
        <main style={{ display: 'grid', gridTemplateColumns: "600px 600px", gridColumnGap: "40px", justifyContent: "center", alignContent: "center" }}>
          <BurgerIngredientsContext.Provider value={ingredients}>

            <BurgerIngredients />
            <BurgerConstructor  />
            
          </BurgerIngredientsContext.Provider>
        </main>
      </React.StrictMode>
    );
  }
}




