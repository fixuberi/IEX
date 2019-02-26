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
export function login(user, history) {
    return dispatch => {
        User.signin(user.email, user.password).done(function(user) {
            const userData = user.data;
            history.push('/');
            dispatch(uiNotificationsActions.addSuccessfulLoginAlert(userData));    
        }).fail(function(err) {
            const reasonOfFail = err.message.split('[railsUm] ').pop();
            dispatch(uiNotificationsActions.addFailureLoginError(reasonOfFail));
        })
    }
}