import { ADD_ERROR_MESSAGE, CLEAR_ALL_MESSAGES } from '../actions/uiNotificationsActions';

const initialState = {
    errors: [],
};

export default function uiNotifications(state = initialState, action) {
    switch(action.type) {
        case ADD_ERROR_MESSAGE: 
            return Object.assign({}, state, {
                errors: state.errors.slice().concat(action.errMsg)
            });
        case CLEAR_ALL_MESSAGES:
            return initialState;
        default:
            return state;
    }
}