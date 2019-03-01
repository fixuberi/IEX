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
} from './constants';
import ChartsApi from '../api/ChartsApi';
import CompanyApi from '../api/CompanyApi';

const chartsApi = new ChartsApi;
const companyApi = new CompanyApi;
export const availablePeriods = {
    FIVE_YEARS:   '5y',
    TWO_YEARS:    '2y',
    ONE_YEAR:     '1y',
    SIX_MONTHS:   '6m',
    THREE_MONTHS: '3m',
    ONE_MONTH:    '1m',
    getSortedArray: function() {
        let periods = {
                months: [],
                years: []
        };
        let obj = this;
        for(let key in obj) {
            if(typeof(obj[key])!= 'function') {
                obj[key].match(/y/) && periods.years.push(obj[key]);
                obj[key].match(/m/) && periods.months.push(obj[key]);
            }
        }
        for (let key in periods) {
            periods[key].sort((a,b)=> parseInt(a) - parseInt(b));
        }
        return [...periods.months, ...periods.years];
    }
}

function requestChartPoints() {
    return { type: REQUEST_CHART_POINTS };
}
function reciveChartPoints(json) {
    return {
        type: RECIVE_CHART_POINTS,
        data: json
    }
}
export function clearChartPoints() {
    return {
        type: CLEAR_CHART_POINTS
    }
}
export function fetchChartPoints(symbol, period) {
    const allowedKeys = ['date', 'change', 'close'];
    return async function(dispatch) {
        dispatch(requestChartPoints());
        const json = await chartsApi.getChartPoints(symbol, period);
        const filteredJson = filterJsonByKeys(json, allowedKeys);
        dispatch(reciveChartPoints(filteredJson));
        
        function filterJsonByKeys(json, allowedKeys) {
           return json.map(rawObj => {
                return Object.keys(rawObj)
                            .filter(key => allowedKeys.includes(key))
                            .reduce((obj, key) => {
                                return {
                                    ...obj,
                                    [key]: rawObj[key]
                                };
                            }, {});
            });
        }
    }
}

function requestCompanyData() {
    return { type: REQUEST_COMPANY_DATA };
}
function reciveCompanyData(json) {
    return {
        type: RECIVE_COMPANY_DATA,
        data: json
    }
}
export function clearCompanyData() {
    return {
        type: CLEAR_COMPANY_DATA
    }
} 

export function fetchCompanyData(symbol) {
    return async function(dispatch) {
        dispatch(requestCompanyData());
        const json = await companyApi.getCompanyData(symbol);
        dispatch(reciveCompanyData(json));
    }
}

function requestCompanyLogo() {
    return { type: REQUEST_COMPANY_LOGO };
}
function reciveCompanyLogo(json) {
    return {
        type: RECIVE_COMPANY_LOGO,
        imageUrl: json.url
    }
}
export function clearCompanyLogo() {
    return {
        type: CLEAR_COMPANY_LOGO
    }
} 
export function fetchCompanyLogo(symbol) {
    return async function(dispatch) {
        dispatch(requestCompanyLogo());
        const json = await companyApi.getCompanyLogo(symbol)
        dispatch(reciveCompanyLogo(json));
    }
}

export function setCompanySymbol(symbol) {
    return {
        type: SET_COMPANY_SYMBOL,
        symbol
    }
}
export function clearCompanySymbol() {
    return {
        type: CLEAR_COMPANY_SYMBOL
    }
}

export function setPeriod(period) {
    return {
        type: SET_PERIOD,
        period
    }
}