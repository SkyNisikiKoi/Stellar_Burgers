import { useState } from 'react';
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

export function BurgerConstructor() {

    const ingredients = useSelector(state => state.ingredientList);
    //const [modalData, setModalData] = useState(null);
    const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

    const {dispatch} = store;
    const {updateOrderNumber} = bindActionCreators(actions, dispatch);

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
                    onClose={onClose}
                    >
                        <OrderDetails />
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