import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import './Card.css';
import { ingredientType } from '../../utils/types.js';
import * as actions from '../../services/actions/actions.jsx';
import { bindActionCreators } from 'redux';
import { store } from '../../services/reducers/index.js';

export function Card({ item, setIsIngredientDetailsOpened }) {

    const {dispatch} = store;
    const {addIngredientView} = bindActionCreators(actions, dispatch);

    function openCard() {
        addIngredientView(item);
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
