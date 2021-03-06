import React, { Component } from 'react';
import { Chart } from 'chart.js';
import styled from 'styled-components';

const ChartWrapper = styled.div`
    position: relative;
    width:45vw;
    @media (max-width: 1200px) {
        width: 90vw;
    }
`;

export default class LineChart extends Component {
    constructor(props) {
        super(props);
        this.chart = null;
        this.id = this.props.displayedMetric + 'Chart';
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
    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data) {
            this.chart.data = this._formatedData();
            this.chart.update()
        }
    }
    componentDidMount() {
        let ctx = document.getElementById(this.id).getContext('2d');
        let chart = new Chart(ctx, {
            type: 'line',
            data: {},
            options: {}
        });
        this.chart = chart;
    }
    render() {
        return(
            <ChartWrapper>
                <canvas id={this.id}></canvas>
            </ChartWrapper>
        );
    }
}