import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { ListItemTop } from '../ListItemTop/ListItemTop.jsx';
import { ListItemBottom } from '../ListItemBottom/ListItemBottom.jsx';
import { ListItemElement } from '../ListItemElement/ListItemElement.jsx';


export default class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useBun: props.dataElements.filter(item => item.type === "bun")[0],
            ingredients: props.dataElements.filter(item => item.type !== "bun")
        };
    }
    costСalculation() {
        let cost = this.state.useBun.price;

        let costs = this.state.ingredients.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)

        return cost + costs;
    }

    render() {
        return (

            <section className="burger-ingredients">
                <div className="burger-ingredients-order">
                    {ListItemTop(this.state.useBun)}
                    <div className="scroll-container">
                        {this.state.ingredients.map(item => ListItemElement(item))}
                    </div>
                    {ListItemBottom(this.state.useBun)}
                </div>
                <div className="cost-container">

                    <p className="text text_type_digits-medium position-button-cost">
                        {this.costСalculation()} <CurrencyIcon type="primary" />
                    </p>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </section>

        );
    }
}



