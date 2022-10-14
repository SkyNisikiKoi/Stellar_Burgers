import React, { useState } from 'react';
import '../../index.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { api } from '../../utils/Api.js';


export const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  seEffect(() => {
    api.loadCards()
      .then(
        (result) => {
          setIsLoaded(true);
          setItems({
            useBun: result.data.filter(item => item.type === "bun")[0],
            ingredients: result.data.filter(item => item.type !== "bun")
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
          <BurgerIngredients items={items} />
          <BurgerConstructor items={items} />

        </main>
      </React.StrictMode>
    );
  }
}




  