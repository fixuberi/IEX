import React from 'react';

const CloseChart = ({ data, isFetching }) => {
    return (
        <div>
            <h2>CloseChart</h2>
            {data.map(el => {
                return <div>{`${el.date} - ${el.close}`}</div>
            })}
        </div>
    )
};

export default CloseChart