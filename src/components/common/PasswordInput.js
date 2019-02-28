import React, { Component } from 'react';
import InputWrapper from '../common/InputWrapper';

export default class PasswordInput extends Component {
    render() {
        const props = this.props;
        let emptyInput = (props.formSubmitted && !props.value);
        let passwordsNotMatch = (props.formSubmitted && props.valueForCompare != props.value)
        let cssClass;
        if(emptyInput || passwordsNotMatch) cssClass = 'incorrect-input';
        return(
            <InputWrapper>
                <label htmlFor={props.fieldName}>{props.label}</label>
                <input className={cssClass} type="password" name={props.fieldName} value={props.value} onChange={props.onChange}></input>
                    { (emptyInput || passwordsNotMatch) &&
                        <div className="error-message">
                            {emptyInput && 
                                <div>{`${props.label} is required`}</div>}
                            {passwordsNotMatch && !emptyInput && 
                                <div>Passwords are not match</div>}
                        </div>
                    }
            </InputWrapper>
        );
    }
}