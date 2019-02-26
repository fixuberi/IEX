import * as uiNotificationsActions from '../actions/uiNotificationsActions';

const User = require('oauthio-web').User;

export function register(user, history) {
    return dispatch => {
        User.signup({
            email: user.email,
            password: user.password,
            firstname: user.firstName,
            lastname: user.lastName,
         }).done(function(user) {
                history.push('/');
                dispatch(uiNotificationsActions.addSuccessfulRegistrationAlert());         
         }).fail(function(err) {
                const reasonOfFail = err.message.split('Validation failed:').pop()
                dispatch(uiNotificationsActions.addFailureRegistrationError(reasonOfFail))
         });
    }
}