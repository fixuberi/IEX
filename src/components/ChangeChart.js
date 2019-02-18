import React from 'react';
import LineChart from './LineChart';

const ChangeChart = ({ data, isFetching }) => {
    return (
        <div>
            <LineChart data={data} displayedMetric="change" lineColor="#ff0000" />
        </div>
    )
};

export default ChangeChart;