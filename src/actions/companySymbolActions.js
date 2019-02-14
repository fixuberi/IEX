export const SET_COMPANY_SYMBOL = 'SET_COMPANY_SYMBOL';
export const CLEAR_COMPANY_SYMBOL = 'CLEAR_COMPANY_SYMBOL';

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