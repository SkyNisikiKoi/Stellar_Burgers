import { React, useState, useEffect } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { ListItemTop } from '../ListItemTop/ListItemTop.jsx';
import { ListItemBottom } from '../ListItemBottom/ListItemBottom.jsx';
import { ListItemElement } from '../ListItemElement/ListItemElement.jsx';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import { useContext } from "react";
import BurgerIngredientsContext from "../../context/burger-ingredients-context.js";
import {api} from "../../utils/Api.js";


export function BurgerConstructor() {


    
    const ingredients = useContext(BurgerIngredientsContext);
    const [modalData, setModalData] = useState(null);
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

    const handleOrderClick = () => {
        api.saveOrder(ingredients)
          .then(data => {
            setModalData(data);
            setIsOrderDetailsOpened(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    const onClose = () => {
        setIsOrderDetailsOpened(false);
    };

    // const handleEscKeydown = (e) => {
    //     e.key === "Escape" && onClose();
    // };

    

    function costСalculation() {
        let cost = ingredients.useBun.price;

        let costs = ingredients.ingredients.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)

        return cost*2 + costs;
    };

        return (

            <section className="burger-ingredients">

                {isOrderDetailsOpened &&
                    <Modal
                        onOverlayClick={onClose}
                        // onEscKeydown={handleEscKeydown}
                    >
                        <OrderDetails modalData={modalData}/>
                    </Modal>}

                <div className="burger-ingredients-order">
                    {ListItemTop(ingredients.useBun)}
                    <div className="scroll-container">
                        {ingredients.ingredients.map(item => ListItemElement(item))}
                    </div>
                    {ListItemBottom(ingredients.useBun)}
                </div>
                <div className="cost-container">

                    <p className="text text_type_digits-medium position-button-cost">
                        {costСalculation()} <CurrencyIcon type="primary" />
                    </p>
                    <Button type="primary" size="medium" onClick={handleOrderClick} htmlType='button'>
        
                        Оформить заказ
                    </Button>
                </div>
            </section>

        );
    }