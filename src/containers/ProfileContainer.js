import React, { Component } from 'react';
import TextInput from '../components/common/TextInput';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`;
const Content = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: #aaaaaa38;
    padding: 1em;
    box-sizing: border-box;
    h2 {
        font-size: 1.5em;
    }
    li {
        padding-top: 1em;
        span {
            color: #4095c6;
            &:after {
                content: ' ';
            }
        }
    }
`;
const Bar = styled.div`
    width: 350px;
    background: #aaaaaa38;
    display: flex;
    justify-content: space-between;
`;
const BarButton = styled.div`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding:0.3em 1.2em;
    border: none;    
    color:#FFFFFF;
    background-color:#4eb5f1;
    text-align:center;
    transition: all 0.2s;
    &:hover{
        background-color:#4095c6;
    }
    &:focus {
        outline: none;
    }
`;

const User = require('oauthio-web').User;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingInfo: false,
            formSubmitted: false,
            user: {
                ...this._initialUserState()
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
    onEditInfoClick = () => this.setState({ editingInfo: true });
    onGoBackClick = () => {
        this._showUserInfoBlock();
    }
    onSaveInfoClick = () => {
        const { firstName, lastName, email } = this.state.user;
        this.setState({ formSubmitted: true });
        if (!firstName || !lastName) return;
        const userInfo = {
            firstname: firstName,
            lastname: lastName,
            email
        };
        this.props.userActions.updateUserInfo(userInfo, this.props.history);
        this._showUserInfoBlock();
    }
    _showUserInfoBlock = () => {
        this.setState({
            editingInfo: false,
            user: {
                ...this._initialUserState()
            }
        }) 
    }
    _initialUserState = () => {
        const { firstname, lastname, email } = User.getIdentity().data;
        return {
            firstName: firstname,
            lastName: lastname,
            email: email,
        }
    }
    render() {
        const user = User.getIdentity();
        const userInfo = (
            <ProfileWrapper>
                <Bar>
                    <BarButton onClick={this.onEditInfoClick}>Edit info</BarButton>
                </Bar>
                <Content>
                <h2>Profile</h2>
                    <ul>
                        <li>
                            <span>First name:</span>{this.state.user.firstName}
                        </li>
                        <li>
                            <span>Last name:</span>{this.state.user.lastName}
                        </li>
                        <li>
                            <span>Email:</span>{this.state.user.email}
                        </li>
                    </ul>
                </Content>
            </ProfileWrapper>
        );
        const editingInfo = (
            <ProfileWrapper>
                <Bar>
                    <BarButton onClick={this.onGoBackClick}>Back</BarButton>
                    <BarButton onClick={this.onSaveInfoClick}>Save</BarButton>
                </Bar>
                <Content>
                    <h2>Editing user info</h2>
                    <TextInput  fieldName="firstName"
                                label="First name"
                                value={this.state.user.firstName}
                                onChange={this.handleChange}
                                formSubmitted={this.state.formSubmitted}
                    />
                    <TextInput  fieldName="lastName"
                                label="Last name"
                                value={this.state.user.lastName}
                                onChange={this.handleChange}
                                formSubmitted={this.state.formSubmitted}
                    />
                </Content>
            </ProfileWrapper>
        );
        const currentBlock = (() => {
            if(this.state.editingInfo) return editingInfo;
            return userInfo; 
        })();
        return(
            currentBlock
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};
const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
export default ProfileContainer;