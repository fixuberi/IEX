import { combineReducers } from 'redux';
import chartPoints from './chartPointsReducer';
import companyData from './companyDataReducer';
import companySymbol from './companySymbolReducer';
import period from './periodReducer';
import uiNotifications from './uiNotificationsReducer';

export const rootReducer = combineReducers({
    chartPoints,
    companyData,
    companySymbol,
    period,
    uiNotifications
});