import React from 'react';
import ChangeChart from './ChangeChart';
import CloseChart from './CloseChart';

const CompanyChartsCollection = (chartData) => {
    return (
        <div>
            <ChangeChart data={chartData.data} 
                         isFetching={chartData.isFetching} />
            <CloseChart data={chartData.data} 
                        isFetching={chartData.isFetching} />
        </div>
    )
}

export default CompanyChartsCollection;