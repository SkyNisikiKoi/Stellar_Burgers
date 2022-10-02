import React from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';

import { Api } from '../Api/Api.js';

const api = new Api({
    baseUrl: '',
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }
});

const dataElements = api.loadCards();

let useBun = dataElements.filter(item => item.type === "bun")[0];
let ingredients = dataElements.filter(item => item.type !== "bun");
let totalСost = costСalculation();

export default class BurgerConstructor extends React.Component {

    render() {
        return (

            <section className="burger-ingredients">
                <div className="burger-ingredients-order">
                    <FillTop />
                    <div className="scroll-container">
                        <FillBody />
                    </div>
                    <FillBottom />
                </div>
                <div className="cost-container">

                    <p className="text text_type_digits-medium position-button-cost">
                    {totalСost} <CurrencyIcon type="primary" />
                    </p>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </section>

        );
    }
}


function ListItemTop(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px', marginBottom: '16px' }}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />

        </div>
    )
}

function ListItemElement(props) {
    return (
        <div style={{ display: 'flex', flexDirection: '', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>

            <DragIcon type="primary" />
            <ConstructorElement
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />

        </div>
    )
}

function ListItemBottom(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px' }}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
            />
        </div>
    )
}


function FillTop() {
    
    let BunTop = ListItemTop(useBun);

    return BunTop;

}

function FillBottom() {
    let BunBottom = ListItemBottom(useBun);
    return BunBottom;
}



function FillBody() {
  let ingredientsList = ingredients.map(item => ListItemElement(item))
    return ingredientsList;

}

function costСalculation() {
    let cost = useBun.price;

    let costs = ingredients.reduce((previousValue, currentValue) => {
       return previousValue + currentValue.price 
    }, 0)

    return cost + costs;
}

