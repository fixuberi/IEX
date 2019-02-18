import React, { Component } from 'react';
import * as chartPointsActions from '../actions/chartPointsActions';
import * as periodActions from '../actions/periodActions';
import * as companyDataActions from '../actions/companyDataActions';
import * as companySymbolActions from '../actions/companySymbolActions';
import SearchForm from '../components/SearchForm';
import PeriodSelector from '../components/PeriodSelector';
import CompanyInfo from '../components/CompanyInfo';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from '..';

class Charts extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onChangePeriod = this.onChangePeriod.bind(this);
    }
    async onSearchSubmit(companySymbol){
        const {chartActions, currPeriod} = this.props;
        try {
            await chartActions.setCompanySymbol(companySymbol);
            await chartActions.fetchCompanyData(companySymbol);
            await chartActions.fetchChartPoints(companySymbol, currPeriod);
        } catch (error) {
            await chartActions.clearCompanyData();
            await chartActions.clearChartPoints();
            console.error(error);
        }
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
            <div>
                <SearchForm onSubmit={this.onSearchSubmit} />
                <PeriodSelector onChange={this.onChangePeriod} 
                                currPeriod={this.props.period}
                                allPeriods={this.props.allPeriods} />
                <CompanyInfo data={this.props.companyInfo.data}
                            isFetching={this.props.companyInfo.isFetching} />
                <CompanyChartsCollection data={this.props.chartPoints.data} 
                                        isFetching={this.props.chartPoints.isFetching} />
            </div>
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
            periodActions,
            companyDataActions,
            companySymbolActions
            ), dispatch)
    }
}

const ChartsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Charts);

export default ChartsContainer;