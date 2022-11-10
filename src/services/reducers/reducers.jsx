import {
    GET_LIST_INGREDIENTS,
    //GET_LIST_INGREDIENTS_CONSTRUCTOR, 
    ADD_INGREDIENT_VIEW,
    REMOVE_INGREDIENT_VIEW,
    UPDATE_ORDER_NUMBER,
    ADD_INGREDIENT_CONSTRUCTOR,
    ADD_ID_INGREDIENT_CONSTRUCTOR,
    REMOVE_INGREDIENT_CONSTRUCTOR,
    CHANGE_INGREDIENT_CONSTRUCTOR

}
    from '../actions/actions.jsx';

const initialStateIngredient = {
    data: []
}

const initialStateIngredientСonstructor = {
    bun: {},
    ingredients: []

}

const initialStateCurrentIngredient = {

}

const initialStateOrder = {
    data: null
}

const initialStateIngredientСonstructorId = {
    data: []
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
        case ADD_INGREDIENT_CONSTRUCTOR:
            {
                console.log(action)
                if (action.payload.type === 'bun') {
                    return {
                        ...state,
                        bun: action.payload
                    }
                } else {

                    let item = action.payload;

                    return {
                        ...state,
                        ingredients: [...state.ingredients, item]
                    }
                }
            }

        case REMOVE_INGREDIENT_CONSTRUCTOR:
            {
                let elemenrs = state.ingredients;
                let index = action.payload.index;
                const result = elemenrs.filter(item => item.index !== index)

                return {
                    ...state,
                    ingredients: result
                }
            }

        case CHANGE_INGREDIENT_CONSTRUCTOR:
            {
                const dragItem = state.ingredients[action.payload.dragIndex]
                const hoverItem = state.ingredients[action.payload.hoverIndex]
          
                const updatedIngredients = [...state.ingredients]
                
                updatedIngredients[action.payload.dragIndex] = hoverItem
                updatedIngredients[action.payload.hoverIndex] = dragItem
            

                return {
                    ...state,
                    ingredients: updatedIngredients
                }
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

export const listIngredientsConstructorId = (state = initialStateIngredientСonstructorId, action) => {
    switch (action.type) {
        case ADD_ID_INGREDIENT_CONSTRUCTOR:
            return {
                ...action.payload
            }

        default:
            return state;
    }
}

