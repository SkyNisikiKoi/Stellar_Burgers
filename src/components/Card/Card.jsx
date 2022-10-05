import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export function Card(props) {

    return (
        <div className="card">
            <Counter className="counter-card" count={1} size="default" />

            <img className="card-img" src={props.image} alt={props.name}></img>
            <p className="text text_type_main-default position-text">
                {props.price} <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default position-text">
                {props.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
