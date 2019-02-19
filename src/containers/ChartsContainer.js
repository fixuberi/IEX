import React, { Component } from 'react';
import * as chartPointsActions from '../actions/chartPointsActions';
import * as periodActions from '../actions/periodActions';
import * as companyDataActions from '../actions/companyDataActions';
import * as companySymbolActions from '../actions/companySymbolActions';
import * as uiNotificationsActions from '../actions/uiNotificationsActions';
import SearchForm from '../components/SearchForm';
import PeriodSelector from '../components/PeriodSelector';
import CompanyInfo from '../components/CompanyInfo';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import Popup from '../components/Popup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const ChartsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Search = styled.div`
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
const PopupWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
`;

class Charts extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onChangePeriod = this.onChangePeriod.bind(this);
        this.popup = React.createRef();
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
            await chartActions.addErrorMessage(`Company with symbol "${companySymbol}" does not exist`);
            await this.showError(this.props.uiNotifications.errors);
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
    showError(errors) {
        errors.forEach((el) => {
            this.popup.current.error({ msg: el}, 2000);
        });
        this.props.chartActions.clearAllMessages();
    }
    
    render(){
        return(
            <ChartsWrapper>
                <Search>
                    <SearchForm onSubmit={this.onSearchSubmit} />
                    <PeriodSelector onChange={this.onChangePeriod} 
                                    currPeriod={this.props.period}
                                    allPeriods={this.props.allPeriods} />
                </Search>
                <Content>
                    <CompanyInfo data={this.props.companyInfo.data}
                                isFetching={this.props.companyInfo.isFetching} />
                    <CompanyChartsCollection data={this.props.chartPoints.data} 
                                            isFetching={this.props.chartPoints.isFetching} />
                </Content>
                <PopupWrapper>
                    <Popup ref={this.popup} />
                </PopupWrapper>
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
        allPeriods: periodActions.availablePeriods.getSortedArray(),
        uiNotifications: state.uiNotifications,     
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chartActions: bindActionCreators(Object.assign({},
            chartPointsActions,
            periodActions,
            companyDataActions,
            companySymbolActions,
            uiNotificationsActions
            ), dispatch)
    }
}

const ChartsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Charts);

export default ChartsContainer;