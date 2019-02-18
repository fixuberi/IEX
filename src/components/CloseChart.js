import React from 'react';
import LineChart from './LineChart';

const CloseChart = ({ data, isFetching }) => {
    return (
        <div>
            <LineChart data={data} displayedMetric="close" lineColor="#00ff00" />
        </div>
    )
};

export default CloseChart