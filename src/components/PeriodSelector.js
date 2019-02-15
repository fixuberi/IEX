import React, { Component } from 'react';

export default class PeriodSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { period: this.props.period};
    }

    handleChange = (event) => {
        const period = event.target.value;
        this.props.onChange(period);
        this.state.period = period;
    }
    render() {
        
    }
}