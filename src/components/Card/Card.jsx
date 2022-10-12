import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export function Card({item, setModalActive}) {

    return (
        <div className="card" onClick={() => setModalActive(true)} >
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
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
