import React, { Component } from 'react';
import InputWrapper from '../common/InputWrapper';

export default class TextInput extends Component {
    render() {
        const props = this.props;
        let emptyInput = (props.formSubmitted && !props.value);
        let cssClass;
        if(emptyInput) cssClass = 'incorrect-input';
        return(
            <InputWrapper>
                <label htmlFor={props.fieldName}>{props.label}</label>
                <input className={cssClass} type="text" name={props.fieldName} value={props.value} onChange={props.onChange}></input>
                    { emptyInput && 
                        <div className="error-message">{`${props.label} is required`}</div>
                    }
            </InputWrapper>
        );
    }
}