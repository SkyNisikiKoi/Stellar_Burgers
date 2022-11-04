import React, { useState, useEffect } from 'react';
import '../../index.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import {BurgerConstructor} from '../BurgerConstructor/BurgerConstructor.jsx';
import { api } from '../../utils/Api.js';
import { Main } from '../Main/Main.jsx';
import { store } from '../../services/reducers/index.js';
import * as actions from '../../services/actions/actions.jsx';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

const {dispatch} = store;
const {getListIngredients} = bindActionCreators(actions, dispatch);


export const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    api.loadCards()
      .then(
        (result) => {
          setIsLoaded(true);
          getListIngredients(result);
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
        <Provider store={store}>
        <AppHeader />
        <Main>
          {/* <BurgerIngredientsContext.Provider value={ingredients}> */}

            <BurgerIngredients />
            <BurgerConstructor  />

          {/* </BurgerIngredientsContext.Provider> */}
        </Main>
        </Provider>
      </React.StrictMode>
    );
  }
}




