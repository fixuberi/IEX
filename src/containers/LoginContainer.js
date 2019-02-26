import React, { Component } from 'react';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
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
                        <input type="submit" value="Login"></input>
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
const connectedLoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);

export { connectedLoginContainer as LoginContainer };