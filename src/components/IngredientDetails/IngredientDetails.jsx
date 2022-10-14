import './IngredientDetails.css';
import PropTypes from 'prop-types';

function IngredientDetails(props) {
    return (
        <div className="ingredient-details">
            <p className="text text_type_main-large ingredient-details-caption">
                Детали ингредиента
            </p>

            <img class="ingredient-details-image" src={props.item.image} alt="" />
            <p className="text text_type_main-small ingredient-details-name">
                {props.item.name}
            </p>
            <div className="ingredient-details-grid">
                <div className="text text_type_main-small ingredient-details-cell">Калории,ккал</div>
                <div className="text text_type_main-small ingredient-details-cell">Белки, г</div>
                <div className="text text_type_main-small ingredient-details-cell">Жиры, г</div>
                <div className="text text_type_main-small ingredient-details-cell">Углеводы, г</div>
                <div className="text text_type_digits-medium ingredient-details-number">{props.item.calories}</div>
                <div className="text text_type_digits-medium ingredient-details-number">{props.item.proteins}</div>
                <div className="text text_type_digits-medium ingredient-details-number">{props.item.fat}</div>
                <div className="text text_type_digits-medium ingredient-details-number">{props.item.carbohydrates}</div>
            </div>
        </div>

    )
}

IngredientDetails.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
      }),

};

export default IngredientDetails;
