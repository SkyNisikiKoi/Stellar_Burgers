import { GET_LIST_INGREDIENTS, GET_LIST_INGREDIENTS_CONSTRUCTOR, ADD_INGREDIENT_VIEW, REMOVE_INGREDIENT_VIEW } from '../actions/actions.jsx';

const initialStateIngredient = {
    _id: "",
    name: "",
    type: "",
    proteins: null,
    fat: null,
    carbohydrates: null,
    calories: null,
    price: null,
    image: "",
    image_mobile: "",
    image_large: "",
    __v: null
}

const initialStateIngredientСonstructor = {
    name: "",
    price: null,
    image: "",

}

const initialStateCurrentIngredient = {
    image: "",
    name: "",
    alories: null,
    proteins: null,
    fat: null,
    carbohydrates: null,
}

const initialStateOrder = {
    number: null,
}

export const ingredientList = (state = initialStateIngredient, action) => {
    switch(action.type) {
        case GET_LIST_INGREDIENTS:
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}

export const listIngredientsConstructor = (state = initialStateIngredientСonstructor, action) => {
    switch(action.type) {
        case GET_LIST_INGREDIENTS_CONSTRUCTOR:
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}

export const ingredientView = (state = initialStateCurrentIngredient, action) => {
    switch(action.type) {
        case ADD_INGREDIENT_VIEW:
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}

export const deliteIngredientView = (state = initialStateOrder, action) => {
    switch(action.type) {
        case REMOVE_INGREDIENT_VIEW:
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}