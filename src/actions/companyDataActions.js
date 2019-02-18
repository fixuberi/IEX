export const REQUEST_COMPANY_DATA = 'REQUEST_COMPANY_DATA';
export const RECIVE_COMPANY_DATA = 'RECIVE_COMPANY_DATA';
export const CLEAR_COMPANY_DATA = 'CLEAR_COMPANY_DATA';

function requestCompanyData() {
    return { type: REQUEST_COMPANY_DATA };
}
function reciveCompanyData(json) {
    return {
        type: RECIVE_COMPANY_DATA,
        data: json
    }
}
function clearCompanyData() {
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