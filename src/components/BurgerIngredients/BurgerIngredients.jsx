import React from 'react';
import './BurgerIngredients.css';
import { ChoiceIngredients } from '../../components/ChoiceIngredients/ChoiceIngredients.jsx';
import { FillOutCards } from '../../components/FillOutCards/FillOutCards.jsx';
import { bun, main, sauce } from '../../utils/constants.js';

export default class BurgerIngredients extends React.Component {
    render() {
        return (

            <section className="section-burgerm-menu">
                <div className="burgerm-menu">

                    <p className="text text_type_main-medium position-title">
                        Соберите бургер
                    </p>

                    <ChoiceIngredients />

                    <div className="scroll-container-menu">

                        <p className="text text_type_main-medium position-section">
                            Булки
                        </p>
                        <div className="burgerm-menu-grid bun">
                            <FillOutCards type={bun} />

                        </div>

                        <p className="text text_type_main-medium position-section">
                            Соусы
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCards type={main} />

                        </div>
                        <p className="text text_type_main-medium position-section">
                            Начинки
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCards type={sauce} />

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
