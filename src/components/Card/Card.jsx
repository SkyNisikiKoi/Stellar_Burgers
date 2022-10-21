import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import './Card.css';
import { ingredientType } from '../../utils/types.js';

export function Card({ item, setIsIngredientDetailsOpened, setId }) {

    function openCard() {
        setId(item._id);
        setIsIngredientDetailsOpened(true)
    }

    return (
        <div className="card" onClick={() => openCard()} key={item._id}>
            <Counter className="counter-card" count={1} size="default" />

            <img className="card-img" src={item.image} alt={item.name}></img>
            <p className="text text_type_main-default position-text">
                {item.price} <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default position-text">
                {item.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    item: ingredientType.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setId: PropTypes.string.isRequired
};
