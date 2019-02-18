import React, { Component } from 'react';
import { Chart } from 'chart.js';

// const LineChart = (props) => {
//     const canvas = <canvas id={props.displayedMetric + 'Chart'}></canvas>;
//     // debugger;
//     // let ctx = canvas.getContext('2d');
//     // let chart = new Chart(ctx, {
//     //     type: 'line',
//     //     data: _formatedData(),
//     //     options: {}
//     // });
//     function _formatedData() {
//         let labels = [];
//         let data = [];
//         props.data.forEach(el => {
//             labels.push(el.date);
//             data.push(el[`${props.displayedMetric}`])
//         });
//         return {
//             labels: labels,
//             datasets: [
//                 {
//                     data: data,
//                     label: props.displayedMetric,
//                     borderColor: props.lineColor
//                 }
//             ]
//         }
//     }
//     return (
//         canvas
//     )
// }
// export default LineChart; 
export default class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.displayedMetric + 'Chart',
            chart: null
        }
    }

    _formatedData() {
        let labels = [];
        let data = [];
        this.props.data.forEach(el => {
            labels.push(el.date);
            data.push(el[`${this.props.displayedMetric}`])
        });
        return {
            labels: labels,
            datasets: [
                {
                    data: data,
                    label: this.props.displayedMetric,
                    borderColor: this.props.lineColor
                }
            ]
        }
    }
    shouldComponentUpdate() {
        if (this.props.data && this.state.chart) {
            this.state.chart.data = this._formatedData();
            this.state.chart.update();
            return true;
        }
        return false;
    }
    componentDidMount() {
        let ctx = document.getElementById(this.state.id).getContext('2d');
        let chart = new Chart(ctx, {
            type: 'line',
            data: {},
            options: {}
        });
        this.setState({ chart: chart })  
    }
    render() {
        return(
            <canvas id={this.state.id}></canvas>
        );
    }
}