import { ingredientList, listIngredientsConstructor, ingredientView, deliteIngredientView } from './reducers.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    ingredientList,
    listIngredientsConstructor,
    ingredientView,
    deliteIngredientView
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

