import { REQUEST_COMPANY_DATA, RECIVE_COMPANY_DATA } from './actions';

export function companyData(state = {
    isFetching: false,
    data: {}
}, action) {
    switch(action.type) {
        case REQUEST_COMPANY_DATA:
            return Object.asign({}, state, { isFetching: true });
        case RECIVE_COMPANY_DATA: 
            return Object.asign({}, state, {
                isFetching: false,
                data: action.data
            });
        default:
            return state;
    }
}