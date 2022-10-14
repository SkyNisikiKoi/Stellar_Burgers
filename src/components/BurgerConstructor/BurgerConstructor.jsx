import { React, useState, useEffect } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { ListItemTop } from '../ListItemTop/ListItemTop.jsx';
import { ListItemBottom } from '../ListItemBottom/ListItemBottom.jsx';
import { ListItemElement } from '../ListItemElement/ListItemElement.jsx';
import { api } from '../../utils/Api.js';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';

function BurgerConstructor() {

    
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

    const closeAllModals = () => {
        setIsOrderDetailsOpened(false);
    };

    const handleEscKeydown = (e) => {
        e.key === "Escape" && closeAllModals();
    };

    

    function costСalculation(items) {
        let cost = items.useBun.price;

        let costs = items.ingredients.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)

        return cost + costs;
    };


    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    // } else {
        return (


            <section className="burger-ingredients">

                {isOrderDetailsOpened &&
                    <Modal
                        onOverlayClick={closeAllModals}
                        onEscKeydown={handleEscKeydown}
                    >
                        <OrderDetails />
                    </Modal>}

                <div className="burger-ingredients-order">
                    {ListItemTop(items.useBun)}
                    <div className="scroll-container">
                        {items.ingredients.map(item => ListItemElement(item))}
                    </div>
                    {ListItemBottom(items.useBun)}
                </div>
                <div className="cost-container">

                    <p className="text text_type_digits-medium position-button-cost">
                        {costСalculation()} <CurrencyIcon type="primary" />
                    </p>
                    <Button type="primary" size="medium" onClick={() => setIsOrderDetailsOpened(true)}>

                        Оформить заказ
                    </Button>
                </div>
            </section>

        );
    }

// }



export default BurgerConstructor;