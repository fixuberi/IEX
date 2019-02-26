import { 
    ADD_ERROR_MESSAGE, 
    ADD_ALLERT_MESSAGE,
    CLEAR_ALL_MESSAGES,
    CLEAR_ERROR_MESSAGES,
} from '../actions/constants';

const initialState = {
    errors: [],
    alerts: []
};

export function uiNotifications(state = initialState, action) {
    switch(action.type) {
        case ADD_ERROR_MESSAGE: 
            return Object.assign({}, state, {
                errors: state.errors.slice().concat(action.msg)
            });
        case ADD_ALLERT_MESSAGE: 
            return Object.assign({}, state, {
                alerts: state.errors.slice().concat(action.msg)
            })
        case CLEAR_ERROR_MESSAGES: 
            return Object.assign({}, state, {
                errors: initialState.errors
            });
        case CLEAR_ALL_MESSAGES:
            return initialState;
        default:
            return state;
    }
}