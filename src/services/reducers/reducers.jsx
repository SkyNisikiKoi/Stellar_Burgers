import { 
    GET_LIST_INGREDIENTS, 
    GET_LIST_INGREDIENTS_CONSTRUCTOR, 
    ADD_INGREDIENT_VIEW, 
    REMOVE_INGREDIENT_VIEW, 
    UPDATE_ORDER_NUMBER 
        } 
from '../actions/actions.jsx';

const initialStateIngredient = {
    data: []
}

const initialStateIngredientСonstructor = {
    data: []

}

const initialStateCurrentIngredient = {

}

const initialStateOrder = {
    data: null
}



export const ingredientList = (state = initialStateIngredient, action) => {
    switch (action.type) {
        case GET_LIST_INGREDIENTS:
            return {
                ...state,
                data: action.payload.data,
                bun: action.payload.data.filter(item => item.type === "bun"),
                main: action.payload.data.filter(item => item.type === "main"),
                sauce: action.payload.data.filter(item => item.type === "sauce"),
                useBun: action.payload.data.filter(item => item.type === "bun")[0],
                ingredients: action.payload.data.filter(item => item.type !== "bun"),
                all: action.payload.data
            }
        default:
            return state;
    }
}

export const listIngredientsConstructor = (state = initialStateIngredientСonstructor, action) => {
    switch (action.type) {
        case GET_LIST_INGREDIENTS_CONSTRUCTOR:
            return {
                ...state,
                data: [...data, action.payload]
            }
        default:
            return state;
    }
}

export const ingredientView = (state = initialStateCurrentIngredient, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_VIEW:
            return {
                ...action.payload
            }
        case REMOVE_INGREDIENT_VIEW:
            return {

            }
        default:
            return state;
    }
}

export const getOrderNumber = (state = initialStateOrder, action) => {
    switch (action.type) {
        case UPDATE_ORDER_NUMBER:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}