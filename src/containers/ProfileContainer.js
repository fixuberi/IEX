import React, { Component } from 'react';

const User = require('oauthio-web').User;

export class ProfileContainer extends Container {
    constructor(props) {
        super(props);
        this.state = {
            editingInfo: false,
            changingPassword: false,
        }
    }
    onChangePasswordClick = () => this.setState({ changingPassword: true });
    onEditInfoClick = () => this.setState({ editingInfo: true });
    onGoBackClick = () => {
        this._showUserInfoBlock();
    }
    onSaveInfoClick = (info) => {
        //dispatch action with recived info
        this._showUserInfoBlock();
    }
    onSaveNewPasswordClick = (password) => {
        //dispatch action with recived password
        this._showUserInfoBlock();
    }
    _showUserInfoBlock = () => {
        this.setState({
            editingInfo: false,
            changingPassword: false
        }) 
    }
    render() {
        const user = User.getIdentity();
        const userInfo = (
            <ProfileWrapper>
                <Content>
                    <ul>
                        <li>
                            First name:{user.firstname}
                        </li>
                        <li>
                            Last name:{user.lastname}
                        </li>
                        <li>
                            Email:{user.email}
                        </li>
                    </ul>
                </Content>
                <Bar>
                    <BarButton>Change password</BarButton>
                    <BarButton>Edit info</BarButton>
                </Bar>
            </ProfileWrapper>
        );
        const editingInfo = (
            <ProfileContainer>
                <Bar>
                    <BarButton>Back</BarButton>
                    <BarButton>Save</BarButton>
                </Bar>
                <Content>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" value={user.firstname} onChange={this.handleChange}></input>
                            { submitted && !user.firstName && 
                                <div>First name is required!</div>
                            }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" value={user.lastname} onChange={this.handleChange}></input>
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
                </Content>
            </ProfileContainer>
        );
        const changingPassword = (
            <ProfileContainer>
                <Bar>
                    <BarButton>Back</BarButton>
                    <BarButton>Save</BarButton>
                </Bar>
                <Content>
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
                </Content>
            </ProfileContainer>
        );
        return(
                dfdfeb
        );
    }
}