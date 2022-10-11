import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { dataElements } from '../../utils/Api.js';

function App() {
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <main style={{ display: 'grid', gridTemplateColumns: "600px 600px", gridColumnGap: "40px", justifyContent: "center", alignContent: "center" }}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  </React.StrictMode>
);
}

export default App;



