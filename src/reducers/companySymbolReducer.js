import { SET_COMPANY_SYMBOL, CLEAR_COMPANY_SYMBOL } from '../actions/companySymbolActions';

export default function companySymbol(state = '', action) {
    switch(action.type) {
        case SET_COMPANY_SYMBOL: 
            return action.symbol;
        case CLEAR_COMPANY_SYMBOL: 
            return '';
        default:
            return state;
    }
}