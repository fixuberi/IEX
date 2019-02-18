export const REQUEST_CHART_POINTS = 'REQUEST_CHART_POINTS';
export const RECIVE_CHART_POINTS = 'RECIVE_CHART_POINTS';
export const CLEAR_CHART_POINTS = 'CLEAR_CHART_POINTS';

function requestChartPoints() {
    return { type: REQUEST_CHART_POINTS };
}
function reciveChartPoints(json) {
    return {
        type: RECIVE_CHART_POINTS,
        data: json
    }
}
function clearChartPoints() {
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

