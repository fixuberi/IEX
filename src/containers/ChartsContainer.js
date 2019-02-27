import React, { Component } from 'react';
import CompanyInfo from '../components/CompanyInfo';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import PeriodSelector from '../components/PeriodSelector';
import Popup from '../components/Popup';
import { availablePeriods } from '../actions/chartsActions';
import * as chartsActions from '../actions/chartsActions';
import * as uiNotificationsActions from '../actions/uiNotificationsActions';
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
const PopupWrapper = styled.div`
    position: absolute;
    top: 10vh;
    right: 0;
    width: 30%;
`;

class Charts extends Component {
    constructor(props) {
        super(props);
        this.onChangePeriod = this.onChangePeriod.bind(this);
        this.popup = React.createRef();
    }
    async onSearchSubmit(companySymbol){
        const {chartActions, uiNotificationsActions, currPeriod} = this.props;
        try {
            await chartActions.setCompanySymbol(companySymbol);
            await chartActions.fetchCompanyData(companySymbol);
            this.props.isLogged && await chartActions.fetchCompanyLogo(companySymbol);
            await chartActions.fetchChartPoints(companySymbol, currPeriod);
        } catch (error) {
            await chartActions.clearCompanyData();
            await chartActions.clearChartPoints();
            await uiNotificationsActions.addNonExistentCompanyError(companySymbol);
            await this.showAllErrorsWithDelay(5000);
            console.error(error);
        }
    }
    showAllErrorsWithDelay(delay) {
        this.props.uiNotifications.errors.forEach((el) => {
            this.popup.current.error({ msg: el}, delay);
        });
        this.props.uiNotificationsActions.clearErrorMessages();
    }
    async onChangePeriod(period) {
        try {
            const { chartActions, companySymbol } = this.props;
            await chartActions.setPeriod(period);
            await chartActions.clearChartPoints();
            if(companySymbol) chartActions.fetchChartPoints(companySymbol, period);
        } catch(error) {
            console.log(error)
        }
    }
    async componentDidMount() {
        const { chartActions } = this.props;
        const symbol = this.props.match.params.symbol;
        await chartActions.clearCompanyData();
        await chartActions.clearChartPoints();
        await chartActions.clearCompanyLogo();
        if(symbol) this.onSearchSubmit(symbol);
    }
    async componentDidUpdate(prevProps, prevState) {
        const symbol = this.props.match.params.symbol;
        const { chartActions } = this.props;
        if(symbol!==prevProps.match.params.symbol) {
            await chartActions.clearCompanyData();
            await chartActions.clearChartPoints();
            await chartActions.clearCompanyLogo();
            if(symbol) this.onSearchSubmit(symbol);
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
                                companyLogoUrl={this.props.companyLogo.imageUrl}
                                isFetching={this.props.companyInfo.isFetching}
                                isLogged={this.props.isLogged} />
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
    const chartsPage = state.chartsPage;
    return {
        companySymbol: chartsPage.companySymbol,
        currPeriod: chartsPage.period,
        companyInfo: chartsPage.companyData,
        chartPoints: chartsPage.chartPoints,
        companyLogo: chartsPage.companyLogo,
        allPeriods: availablePeriods.getSortedArray(),
        uiNotifications: state.uiNotifications
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        chartActions: bindActionCreators(chartsActions, dispatch),
        uiNotificationsActions: bindActionCreators(uiNotificationsActions, dispatch)
    }
}

const ChartsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Charts);
export default ChartsContainer;