import React, { useState } from 'react';
import '../../index.css';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';


import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';

const App = () => {

  const [modalActive, setModalActive] = useState(false);
  

return (
  <React.StrictMode>
    <AppHeader />
    <main style={{ display: 'grid', gridTemplateColumns: "600px 600px", gridColumnGap: "40px", justifyContent: "center", alignContent: "center" }}>
      <BurgerIngredients setModalActive={setModalActive}/>
      <BurgerConstructor setModalActive={setModalActive} />
      <ModalOverlay active={modalActive} setActive={setModalActive} />
    </main>
  </React.StrictMode>
);
}

export default App;



