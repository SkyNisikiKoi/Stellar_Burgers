import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerIngredients.css';
import { dataCards } from '../../utils/data.js';

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
                            <FillOutCardsBun />

                        </div>

                        <p className="text text_type_main-medium position-section">
                            Соусы
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCardsSauce />

                        </div>
                        <p className="text text_type_main-medium position-section">
                            Начинки
                        </p>
                        <div className="burgerm-menu-grid">
                            <FillOutCardsMain />

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}


function ChoiceIngredients() {
    const [current, setCurrent] = React.useState('Булки');

    return (
        <div style={{ display: 'flex', marginBottom: "40px" }}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

function Card(props) {

    return (
        <div className="card">
            <Counter className="counter-card" count={1} size="default" />

            <img className="card-img" src={props.image} alt={props.name}></img>
            <p className="text text_type_main-default position-text">
                {props.price} <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default position-text">
                {props.name}
            </p>
        </div>
    )
}

function FillOutCardsBun() {

    let arr = dataCards.filter(item => item.type === "bun");

    let newCards = arr.map(item => Card(item))//<Card image={item.image} name={item.name} price={item.price}/>)


    return newCards;
};

function FillOutCardsMain() {

    let arr = dataCards.filter(item => item.type === "main");

    let newCards = arr.map(item => Card(item))//<Card image={item.image} name={item.name} price={item.price}/>)

    return newCards;
};

function FillOutCardsSauce() {

    let arr = dataCards.filter(item => item.type === "sauce");

    let newCards = arr.map(item => Card(item))//<Card image={item.image} name={item.name} price={item.price}/>)

    return newCards;
};

