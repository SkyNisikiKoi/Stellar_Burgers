
export const GET_LIST_INGREDIENTS = 'GET_LIST_INGREDIENTS';
export const GET_LIST_INGREDIENTS_CONSTRUCTOR = 'GET_LIST_INGREDIENTS_CONSTRUCTOR';
export const ADD_INGREDIENT_VIEW = 'ADD_INGREDIENT_VIEW';
export const REMOVE_INGREDIENT_VIEW = 'REMOVE_INGREDIENT_VIEW';


export const getListIngredients =  (payload) => {
    return {
        type: GET_LIST_INGREDIENTS,
        payload
    }
}

export const getListIngredientsConstructor =  (payload) => {
    return {
        type: GET_LIST_INGREDIENTS_CONSTRUCTOR,
        payload
    }
}

export const addIngredientView =  (payload) => {
    return {
        type: ADD_INGREDIENT_VIEW,
        payload
    }
}

export const removeIngredientView =  (payload) => {
    return {
        type: REMOVE_INGREDIENT_VIEW,
        payload
    }
}