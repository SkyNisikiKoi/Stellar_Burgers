import { Card } from '../../components/Card/Card.jsx';
import PropTypes from 'prop-types';

export function FillOutCards({ ingredients, setIsIngredientDetailsOpened }) {

    let newCards = ingredients.map(item => Card({ item, setIsIngredientDetailsOpened }))
    return newCards;
};

FillOutCards.propTypes = {
    ingredients: PropTypes.array.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func.isRequired,
};