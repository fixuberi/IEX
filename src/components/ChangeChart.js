import React from 'react';

const ChangeChart = ({ data, isFetching }) => {
    return (
        <div>
            <h2>ChangeChart</h2>
            {data.map(el => {
                return <div>{`${el.date} - ${el.change}`}</div>
            })}
        </div>
    )
};

export default ChangeChart;