import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor.jsx';
import { dataElements } from './utils/Api.js';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <main style={{ display: 'grid', gridTemplateColumns: "600px 600px", gridColumnGap: "40px", justifyContent: "center", alignContent: "center" }}>

      <BurgerIngredients />
      <BurgerConstructor dataElements={dataElements} />

    </main>
  </React.StrictMode>
);

