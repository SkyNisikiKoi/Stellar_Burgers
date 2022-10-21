import PropTypes from 'prop-types';


export const ingredientType = PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
        
      })


    //   ingredientType.isRequired

    //   export const ingredientPropType = PropTypes.shape({
    //     _id: PropTypes.string.isRequired,
    //     type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
    //     ...
    //   });

    //   IngredientsCategory.propTypes = {
    //     title: PropTypes.string.isRequired,
    //     titleId: PropTypes.string.isRequired,
    //     ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    //   };

    //   BurgerIngredient.propTypes = {
    //     ingredientData: ingredientPropType.isRequired,
    //     count: PropTypes.number.isRequired,
    //   };