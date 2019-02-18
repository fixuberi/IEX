export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';
export const CLEAR_ALL_MESSAGES = 'CLEAR_ALL_MESSAGES';

export function addErrorMessage(errMsg) {
    return {
        type: ADD_ERROR_MESSAGE,
        errMsg
    }
}
export function clearAllMessages() {
    return {
        type: CLEAR_ALL_MESSAGES
    }
}