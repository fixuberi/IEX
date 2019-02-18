import React, { Component } from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // debugger;
        // const popup = document.getElementById("popup");
        // setTimeout(() => {
        //     popup.style.display = 'none';
        // }, 2000);
        // this.props.onShow();
    }
    render() {
        debugger;
        let popup;
        if(this.props.errors.length > 0) {
            popup = (
                <div style="background: red" id="popup">
                    <ul>
                        {this.props.errors.map(err => (
                            <li>{err}</li>
                        ))}
                    </ul>
                </div>
            ) 
        } else popup = '';
        return(
            popup
        )
    }
}