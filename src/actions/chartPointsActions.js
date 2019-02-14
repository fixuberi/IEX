export const REQUEST_CHART_POINTS = 'REQUEST_CHART_POINTS';
export const RECIVE_CHART_POINTS = 'RECIVE_CHART_POINTS';

function requestChartPoints() {
    return { type: REQUEST_CHART_POINTS };
}
function reciveChartPoints(json) {
    return {
        type: RECIVE_CHART_POINTS,
        data: json
    }
}
export function fetchChartPoints(symbol, period) {
    return function(dispatch) {
        dispatch(requestChartPoints());
        return fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${period}`)
            .then(response => response.json())
            .then(json => 
                dispatch(reciveChartPoints(json)));
    }
}

