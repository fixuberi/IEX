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
} from './constants';

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
    return async function(dispatch) {
        dispatch(requestChartPoints());
        const response = await fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${period}`);
        if(response.status === 404) throw 404;
        const json = await response.json();           
        const allowedKeys = ['date', 'change', 'close'];
        const filteredJson = json.map(rawObj => {
            return Object.keys(rawObj)
                        .filter(key => allowedKeys.includes(key))
                        .reduce((obj, key) => {
                            return {
                                ...obj,
                                [key]: rawObj[key]
                            };
                        }, {});
        });     
        dispatch(reciveChartPoints(filteredJson))    
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
        const response = await fetch(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
        if(response.status === 404) throw 404;
        const json = await response.json();
        dispatch(reciveCompanyData(json));
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