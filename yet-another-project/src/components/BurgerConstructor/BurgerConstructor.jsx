import React from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { dataCards } from '../../utils/data.js';

export default class BurgerIngredients extends React.Component {
    render() {
        return (

            <section className="burger-ingredients">
                <div className="burger-ingredients-order">
                    <ListItemTop />
                    <div className="scroll-container">
                        <ListItemElement />
                        <ListItemElement />
                        <ListItemElement />
                        <ListItemElement />
                        <ListItemElement />
                        <ListItemElement />
                        <ListItemElement />
                    </div>
                    <ListItemBottom />
                </div>
                <div className="cost-container">

                    <p className="text text_type_main-medium position-button-cost">
                        610 <CurrencyIcon type="primary" />
                    </p>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </section>

        );
    }
}


function ListItemTop() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px', marginBottom: '16px' }}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />

        </div>
    )
}

function ListItemElement() {
    return (
        <div style={{ display: 'flex', flexDirection: '', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>

            <DragIcon type="primary" />
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />

        </div>
    )
}

function ListItemBottom() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: '10px' }}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
        </div>
    )
}

