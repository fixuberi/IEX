import { combineReducers } from 'redux';
import * as chartsReducer from './chartsReducer'
import * as uiNotificationsReducer from './uiNotificationsReducer';

export const rootReducer = combineReducers({
    ...chartsReducer,
    ...uiNotificationsReducer
});