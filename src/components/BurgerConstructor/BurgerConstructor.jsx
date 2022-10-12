import { useState, useEffect } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './BurgerConstructor.css';
import { ListItemTop } from '../ListItemTop/ListItemTop.jsx';
import { ListItemBottom } from '../ListItemBottom/ListItemBottom.jsx';
import { ListItemElement } from '../ListItemElement/ListItemElement.jsx';
import { api } from '../../utils/Api.js';
import {dataCards as result} from '../../utils/data.js'

function BurgerConstructor(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
  

    useEffect(() => {
        // api.loadCards()
        //   .then(
        //     (result) => {
              setIsLoaded(true);
              setItems({
                // useBun: result.data.filter(item => item.type === "bun")[0],
                // ingredients: result.data.filter(item => item.type !== "bun")
                useBun: result.filter(item => item.type === "bun")[0],
                ingredients: result.filter(item => item.type !== "bun")
              }
                );
        //     },
            
        //     (error) => {
        //       setIsLoaded(true);
        //       setError(error);
        //     }
        //   )
      }, [])

    function costСalculation() {
        let cost = items.useBun.price;

        let costs = items.ingredients.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)

        return cost + costs;
    };


    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
    return (

        <section className="burger-ingredients">
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
                <Button type="primary" size="medium" onClick={() => props.setModalActive(true) } >
                
                    Оформить заказ
                </Button>
            </div>
        </section>

    );}

}



export default BurgerConstructor;