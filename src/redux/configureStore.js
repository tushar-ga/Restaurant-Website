import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Leaders} from './leaders';
import {Comments} from './comments';
import {Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes,
        leaders : Leaders,
        promotions: Promotions,
        comments: Comments
    }),
    applyMiddleware(thunk,logger));
    return store;
}