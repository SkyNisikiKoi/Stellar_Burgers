import { Card } from '../../components/Card/Card.jsx';
import PropTypes from 'prop-types';

export function FillOutCards({ type, setIsIngredientDetailsOpened }) {

    let newCards = type.map(item => Card({ item, setIsIngredientDetailsOpened }))
    return newCards;
};

FillOutCards.propTypes = {
    type: PropTypes.array.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
};