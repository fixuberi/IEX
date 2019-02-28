import React, { Component } from 'react';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmailInput from '../components/common/EmailInput';
import PasswordInput from '../components/common/PasswordInput';
import FormWrapper from '../components/common/FormWrapper';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
    }
    handleChange = (event) => {
        const { name: key, value } = event.target;
        const { user } = this.state;
        this.setState({ 
            user: {
                ...user,
                [key]: value.trim()
            },
            submitted: false
         });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        if(this._formDataIsValid) this.props.userActions.login(this.state.user, this.props.history);
    }
    _formDataIsValid = () => {
        const user = this.state.user;
        return (
            user.email &&
            user.password
        )
    }
    render() {
        const { user, submitted } = this.state
        return(
            <FormWrapper>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <EmailInput fieldName="email" 
                                label="Email" 
                                value={user.email} 
                                onChange={this.handleChange} 
                                formSubmitted={submitted} 
                    />
                    <PasswordInput  fieldName="password" 
                                    label="Password" 
                                    value={user.password}
                                    valueForCompare={user.password} 
                                    onChange={this.handleChange} 
                                    formSubmitted={submitted} 
                    />
                    <input type="submit" value="Login"></input>
                </form>
            </FormWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
} 
const connectedLoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);

export { connectedLoginContainer as LoginContainer };