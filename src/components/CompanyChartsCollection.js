import React, { Component } from 'react';
import ChangeChart from './ChangeChart';
import CloseChart from './CloseChart';
import styled from 'styled-components';

const ChartsCollectionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%
`;
const CompanyChartsCollection = (props) => {
    return (
        <ChartsCollectionWrapper>
            <ChangeChart data={props.data} 
                         isFetching={props.isFetching} />
            <CloseChart data={props.data} 
                        isFetching={props.isFetching} />
        </ChartsCollectionWrapper>
    )
};

export default CompanyChartsCollection;
