import './IngredientDetails.css';
import { ingredientType } from '../../utils/types.js';

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
    item: ingredientType.isRequired

};

export default IngredientDetails;
