import { REQUEST_COMPANY_DATA, RECIVE_COMPANY_DATA, CLEAR_COMPANY_DATA } from '../actions/companyDataActions';

export default function companyData(state = {
    isFetching: false,
    data: {}
}, action) {
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