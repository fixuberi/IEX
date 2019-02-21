import React, { Component } from 'react';
import CompanyInfo from '../components/CompanyInfo';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import PeriodSelector from '../components/PeriodSelector';
import * as chartPointsActions from '../actions/chartPointsActions';
import * as periodActions from '../actions/periodActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const ChartsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

class Charts extends Component {
    constructor(props) {
        super(props);
        this.onChangePeriod = this.onChangePeriod.bind(this);
    }

    async onChangePeriod(period) {
        try {
            const { chartActions, companySymbol } = this.props;
            await chartActions.setPeriod(period);
            if(companySymbol) chartActions.fetchChartPoints(companySymbol, period);
        } catch(error) {
            console.log(error)
        }
    }

    render(){
        return(
            <ChartsWrapper>
               <Content>
                    <PeriodSelector onChange={this.onChangePeriod} 
                                    currPeriod={this.props.currPeriod}
                                    allPeriods={this.props.allPeriods} />
                    <CompanyInfo data={this.props.companyInfo.data}
                                isFetching={this.props.companyInfo.isFetching} />
                    <CompanyChartsCollection data={this.props.chartPoints.data} 
                                            isFetching={this.props.chartPoints.isFetching} />
                </Content>
            </ChartsWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companySymbol: state.companySymbol,
        currPeriod: state.period,
        companyInfo: state.companyData,
        chartPoints: state.chartPoints,
        allPeriods: periodActions.availablePeriods.getSortedArray()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chartActions: bindActionCreators(Object.assign({},
            chartPointsActions,
            periodActions
            ), dispatch)
    }
}

const ChartsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Charts);
export default ChartsContainer;