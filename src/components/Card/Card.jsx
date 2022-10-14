import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import './Card.css';

export function Card({ item, setIsIngredientDetailsOpened, setId }) {

    function openCard() {
        setId(item._id);
        setIsIngredientDetailsOpened(true)
    }

    return (
        <div className="card" onClick={() => openCard()} >
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
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired
      }),
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
    setId: PropTypes.string.isRequired
};
