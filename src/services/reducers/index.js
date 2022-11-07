import { ingredientList, listIngredientsConstructor, ingredientView, getOrderNumber, listIngredientsConstructorId } from './reducers.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    ingredientList,
    listIngredientsConstructor,
    ingredientView,
    getOrderNumber,
    listIngredientsConstructorId
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

