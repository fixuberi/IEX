import React, { Component } from 'react';

export default class PeriodSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { period: this.props.currPeriod};
    }

    handleChange = (event) => {
        const period = event.target.value;
        this.props.onChange(period);
        this.setState({period});
    }
    humanizePeriod = (str) => {
        const periodNames = { 
            'm': 'month', 
            'y': 'year' 
        }
        let [ quantity, sign ] = str;
        let humanizedPeriodName = periodNames[sign];
        if(quantity > 1) humanizedPeriodName += 's';

        return `${quantity} ${humanizedPeriodName}`;
    }
    render() {
        return (
            <select value={this.props.currPeriod} 
                    onChange={this.handleChange}>
                {this.props.allPeriods.map(el => {
                    return (<option key={el} value={el}>{this.humanizePeriod(el)}</option>)
                })}
            </select>
        )
    }
}