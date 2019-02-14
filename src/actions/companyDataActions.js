export const REQUEST_COMPANY_DATA = 'REQUEST_COMPANY_DATA';
export const RECIVE_COMPANY_DATA = 'RECIVE_COMPANY_DATA';

function requestCompanyData() {
    return { type: REQUEST_COMPANY_DATA };
}
function reciveCompanyData(json) {
    return {
        type: RECIVE_COMPANY_DATA,
        data: json
    }
}

export function fetchCompanyData(symbol) {
    return function(dispatch) {
        dispatch(requestCompanyData());
        return fetch(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
            .then(response => response.json())
            .then(json => 
                dispatch(reciveCompanyData(json)));
    }
}