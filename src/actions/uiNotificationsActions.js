import {
    ADD_ERROR_MESSAGE,
    ADD_ALLERT_MESSAGE,
    CLEAR_ALL_MESSAGES,
    CLEAR_ERROR_MESSAGES,
} from './constants';

function addErrorMessage(msg) {
    return {
        type: ADD_ERROR_MESSAGE,
        msg
    }
}
function addAlertMessage(msg) {
    return {
        type: ADD_ALLERT_MESSAGE,
        msg
    }
}
export function addSuccessfulRegistrationAlert() {
    return addAlertMessage(`Registration complete!`)
}
export function addFailureRegistrationError(reason) {
    return addErrorMessage(`Registration failed! ${reason}`)
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