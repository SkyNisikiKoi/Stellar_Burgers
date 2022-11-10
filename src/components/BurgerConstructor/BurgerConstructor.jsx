import { React, useState, useCallback, useRef } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { ListItemTop } from '../ListItemTop/ListItemTop.jsx';
import { ListItemBottom } from '../ListItemBottom/ListItemBottom.jsx';
import { ListItemElement } from '../ListItemElement/ListItemElement.jsx';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails.jsx';
import {api} from "../../utils/Api.js";
import { useSelector } from 'react-redux';
import * as actions from '../../services/actions/actions.jsx';
import { bindActionCreators } from 'redux';
import { store } from '../../services/reducers/index.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import {ingridientType} from "../Card/Card.jsx";

export function BurgerConstructor({children, onDropHandler}) {

    const ingredientsConstructor = useSelector(state => state.listIngredientsConstructor);
    
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

    const {dispatch} = store;
    const {updateOrderNumber, addIngredientConstructor} = bindActionCreators(actions, dispatch);


    const handleOrderClick = () => {
        api.saveOrder(ingredients)
          .then(data => {
            updateOrderNumber(data);
            setIsOrderDetailsOpened(true);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    const onClose = () => {
        setIsOrderDetailsOpened(false);
    };

    const [{hover}, dropTarget] = useDrop({
        accept: ingridientType,
        drop(item) {
            handleDrop(item);
        },
        collect: monitor => ({
            hover: monitor.isOver()
        })
    });
    
    const handleDrop = useCallback((item) => {
        
        const card = item.type !== 'bun' ? {...item, dragId: ingredientsConstructor.ingredients.length, isDragging: false} : {...item};
     addIngredientConstructor(card);
     console.log(card)
    }, [dispatch, ingredientsConstructor]);


    function costСalculation() {
        let cost = ingredientsConstructor.bun.price;

        let costs = ingredientsConstructor.ingredients.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)

        return cost*2 + costs;
    };

        return (

            <section className="burger-ingredients" ref={dropTarget}>

                {isOrderDetailsOpened &&
                    <Modal
                    onClose={onClose}
                    >
                        <OrderDetails />
                    </Modal>}

                <div className="burger-ingredients-order">
                    {ListItemTop(ingredientsConstructor.bun)}  
                    <div className="scroll-container">
                        {ingredientsConstructor.ingredients.map((item, index) => ListItemElement({item, index}))}
                    </div>
                    {ListItemBottom(ingredientsConstructor.bun)}
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
