import {
    REQUEST_CHART_POINTS,
    RECIVE_CHART_POINTS,
    CLEAR_CHART_POINTS,

    REQUEST_COMPANY_DATA,
    RECIVE_COMPANY_DATA,
    CLEAR_COMPANY_DATA,

    SET_COMPANY_SYMBOL,
    CLEAR_COMPANY_SYMBOL,

    SET_PERIOD,
} from '../actions/constants';
import { availablePeriods } from '../actions/chartsActions';

const initialState = {
    chartPoints: {
        data: [],
        isFetching: false,
    },
    companyData: {
        data: {},
        isFetching: false,
    },
    companySymbol: '',
    period: availablePeriods.ONE_MONTH
}

export function chartPoints(state = initialState.chartPoints, action) {
    switch(action.type) {
        case REQUEST_CHART_POINTS: 
            return Object.assign({}, state, { isFetching: true });
        case RECIVE_CHART_POINTS: 
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case CLEAR_CHART_POINTS: 
            return Object.assign({}, state, {
                isFetching: false,
                data: []
            });
        default: 
            return state;
    }
}

export function companyData(state = initialState.companyData, action) {
    switch(action.type) {
        case REQUEST_COMPANY_DATA:
            return Object.assign({}, state, { isFetching: true });
        case RECIVE_COMPANY_DATA: 
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        case CLEAR_COMPANY_DATA: 
            return Object.assign({}, state, {
                isFetching: false,
                data: {}
            })
        default:
            return state;
    }
}

export function companySymbol(state = initialState.companySymbol, action) {
    switch(action.type) {
        case SET_COMPANY_SYMBOL: 
            return action.symbol;
        case CLEAR_COMPANY_SYMBOL: 
            return '';
        default:
            return state;
    }
}

export function period(state = initialState.period, action) {
    switch(action.type) {
        case SET_PERIOD: 
            return action.period;
        default: 
            return state;
    }
}

