import React, { Component } from 'react';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
            <div>
                <h2>Registering</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange}></input>
                        { submitted && !user.firstName && 
                            <div>First name is required!</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange}></input>
                        { submitted && !user.lastName && 
                            <div>Last name is required!</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={user.email} onChange={this.handleChange}></input>
                        { submitted && !user.email && 
                            <div>Email is required!</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={user.password} onChange={this.handleChange} autoComplete='false'></input>
                        { submitted && !user.password && 
                            <div>Password is required!</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Password confirm</label>
                        <input type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={this.handleChange} autoComplete='false'></input>
                        { submitted && !user.passwordConfirm && 
                            <div>Password confirmation is required!</div>
                        }
                        { submitted && user.passwordConfirm != user.password && 
                            <div>Passwords are not match!</div>
                        }
                    </div>
                    <div>
                        <input type="submit" value="Register"></input>
                    </div>
                </form>
            </div>
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