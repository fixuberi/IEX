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

    REQUEST_COMPANY_LOGO,
    RECIVE_COMPANY_LOGO,
    CLEAR_COMPANY_LOGO,
} from '../actions/constants';
import { availablePeriods } from '../actions/chartsActions';
var deepExtend = require('deep-extend');

const initialState = {
    chartsPage: {
        chartPoints: {
            data: [],
            isFetching: false,
        },
        companyData: {
            data: {},
            isFetching: false,
        },
        companySymbol: '',
        period: availablePeriods.ONE_MONTH,
        companyLogo: {
            imageUrl:'',
            isFetching: false
        }
    }
}
export function chartsPage(state = initialState.chartsPage, action) {
    let stateUpdate;
    switch(action.type) {
        case REQUEST_CHART_POINTS: 
            stateUpdate = { chartPoints: {
                    isFetching: true
                }
            };
            return deepExtend({}, state, stateUpdate);

        case RECIVE_CHART_POINTS: 
            stateUpdate = { chartPoints: {
                    isFetching: false,
                    data: action.data
                }
            };
            return deepExtend({}, state, stateUpdate);

        case CLEAR_CHART_POINTS: 
            stateUpdate = { chartPoints: {
                    isFetching: false,
                    data: []
                }
            };
            return deepExtend({}, state, stateUpdate);

        case REQUEST_COMPANY_DATA: 
            stateUpdate = { companyData: {
                    isFetching: true
                }
            };
            return deepExtend({}, state, stateUpdate);

        case RECIVE_COMPANY_DATA: 
            stateUpdate = { companyData: {
                    isFetching: false,
                    data: action.data
                }
            };
            return deepExtend({}, state, stateUpdate);

        case CLEAR_COMPANY_DATA: 
            stateUpdate = { companyData: {
                    isFetching: false,
                    data: []
                }
            };
            return deepExtend({}, state, stateUpdate);

        case SET_COMPANY_SYMBOL: 
            stateUpdate = { companySymbol: action.symbol };
            return deepExtend({}, state, stateUpdate);

        case CLEAR_COMPANY_SYMBOL: 
            stateUpdate = { companySymbol: initialState.chartsPage.companySymbol };
            return deepExtend({}, state, stateUpdate);
        case SET_PERIOD: 
            stateUpdate = { period: action.period };
            return deepExtend({}, state, stateUpdate);

        case REQUEST_COMPANY_LOGO: 
            stateUpdate = { companyLogo: {
                    isFetching: true
                } 
            };
            return deepExtend({}, state, stateUpdate);
        case RECIVE_COMPANY_LOGO:
            stateUpdate = { companyLogo: {
                    isFetching: false,
                    imageUrl: action.imageUrl
                } 
            };
            return deepExtend({}, state, stateUpdate);
        case CLEAR_COMPANY_LOGO: 
            stateUpdate = { companyLogo: initialState.chartsPage.companyLogo };
            return deepExtend({}, state, stateUpdate);
        default: 
            return state;     
    }
}