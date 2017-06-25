import {combineReducers} from 'redux';
import {rabbitReducer} from './rabbitReducer';
import {hunterReducer} from './hunterReducer';

export const rootReducer = combineReducers({
    rabbitReducer,
    hunterReducer
});
