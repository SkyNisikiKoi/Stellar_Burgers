import { ingredientList, listIngredientsConstructor, ingredientView, deliteIngredientView } from './reducers.jsx';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'


export const rootReducer = combineReducers({
    ingredientList,
    listIngredientsConstructor,
    ingredientView,
    deliteIngredientView
});

export const store = createStore(rootReducer, composeWithDevTools);