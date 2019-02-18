import React, { Component } from 'react';
import ChangeChart from './ChangeChart';
import CloseChart from './CloseChart';

const CompanyChartsCollection = (props) => {
    return (
        <div>
            <ChangeChart data={props.data} 
                         isFetching={props.isFetching} />
            <CloseChart data={props.data} 
                        isFetching={props.isFetching} />
        </div>
    )
};

export default CompanyChartsCollection;
