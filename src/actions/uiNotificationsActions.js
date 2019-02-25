import {
    ADD_ERROR_MESSAGE,
    CLEAR_ALL_MESSAGES,
    CLEAR_ERROR_MESSAGES,
} from './constants';

function addErrorMessage(errMsg) {
    return {
        type: ADD_ERROR_MESSAGE,
        errMsg
    }
}
export function addNonExistentCompanyError(companySymbol) {
    return addErrorMessage(`Company with symbol "${companySymbol}" does not exist`);
}
export function clearAllMessages() {
    return {
        type: CLEAR_ALL_MESSAGES
    }
}
export function clearErrorMessages() {
    return {
        type: CLEAR_ERROR_MESSAGES
    }
}