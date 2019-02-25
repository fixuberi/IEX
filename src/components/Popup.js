import React, { Component } from 'react';
import * as uiNotificationsActions from '../actions/uiNotificationsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Popup extends Component {
    constructor() {
        super();
        this.count = 0;
        this.state = {};
    }
    showAllErrorsWithDelay(delay) {
        this.props.uiNotifications.errors.forEach((el) => {
            this.popup.current.error({ msg: el}, delay);
        }); 
        this.props.uiNotificationsActions.clearErrorMessages();
    }
    error(data, delay) {
        this.addNotification(data, delay, 'error');
    }
    addNotification(data, delay, theme) {
        const key = this.count++;
        const newState = Object.assign(this.state, 
                                       { [key]: { msg: data.msg, theme: theme } }
                                       );
        this.setState(newState, () => this.countThenHide(key, delay));
    }
    countThenHide(key, time) {
        setTimeout(() => {
            this.hideNotification(key);
        }, time);
    }
    hideNotification(key) {
        this.setState((state) => {
            delete state[key];
            return state;
        })
    }
    makeItem(key) {
        const item = this.state[key];
        return(
            <div className={`popup-notification__item ${item.theme}`}
                 onClick={() => this.hideNotification(key)}
                 key={key}>
                {item.msg}
            </div>
        );
    }
    render() {
        const keys = Object.keys(this.state);
        const items = keys.map(key => this.makeItem(key));
        return(
            <div className="popup-notification" style={{position: 'absolute', top:0, right:0, color: 'red'}}>{items}</div>
        )
    } 
}

const mapStateToProps = (state) => {
    return { 
        uiNotifications: state.uiNotifications
     }
}
const mapDispatchToProps = (dispatch) => {
    return {
        uiNotificationsActions: bindActionCreators(uiNotificationsActions, dispatch)
    }
}

const PopupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);
export default PopupContainer;