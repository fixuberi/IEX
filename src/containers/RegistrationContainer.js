import React, { Component } from 'react';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextInput from '../components/common/TextInput';
import EmailInput from '../components/common/EmailInput';
import PasswordInput from '../components/common/PasswordInput';
import FormWrapper from '../components/common/FormWrapper';
class RegistrationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: ''
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
        if(this._formDataIsValid) this.props.userActions.register(this.state.user, this.props.history);
    }
    _formDataIsValid = () => {
        const user = this.state.user;
        return (
            user.firstName &&
            user.lastName &&
            user.email &&
            user.password &&
            user.passwordConfirm &&
            user.password == user.passwordConfirm
        )
    }
    render() {
        const { user, submitted } = this.state
        return(
            <FormWrapper>
                <h2>SignUp</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextInput  fieldName="firstName" 
                                label="First name" 
                                value={user.firstName} 
                                onChange={this.handleChange} 
                                formSubmitted={submitted} 
                    />
                    <TextInput  fieldName="lastName" 
                                label="Last name" 
                                value={user.lastName} 
                                onChange={this.handleChange} 
                                formSubmitted={submitted} 
                    />
                    <EmailInput fieldName="email" 
                                label="Email" 
                                value={user.email} 
                                onChange={this.handleChange} 
                                formSubmitted={submitted} 
                    />
                    <PasswordInput  fieldName="password" 
                                    label="Password" 
                                    value={user.password}
                                    valueForCompare={user.passwordConfirm} 
                                    onChange={this.handleChange} 
                                    formSubmitted={submitted} 
                    />
                    <PasswordInput  fieldName="passwordConfirm" 
                                    label="Password confirmation" 
                                    value={user.passwordConfirm}
                                    valueForCompare={user.password} 
                                    onChange={this.handleChange} 
                                    formSubmitted={submitted} 
                    />
                    <input type="submit" value="Register"></input>
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
const connectedRegistrationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);

export { connectedRegistrationContainer as RegistrationContainer };