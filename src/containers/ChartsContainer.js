import React, { Component } from 'react';
import CompanyInfo from '../components/CompanyInfo';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import PeriodSelector from '../components/PeriodSelector';
import PopupContainer from '../components/Popup';
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
            await chartActions.fetchChartPoints(companySymbol, currPeriod);
        } catch (error) {
            await chartActions.clearCompanyData();
            await chartActions.clearChartPoints();
            await uiNotificationsActions.addNonExistentCompanyError(companySymbol);
            // await this.showError(this.props.uiNotifications.errors);
            debugger;
            await this.popup.current.showAllErrorsWithDelay(5000);
            console.error(error);
        }
    }
    // showError(errors) {
    //     errors.forEach((el) => {
    //         this.popup.current.error({ msg: el}, 5000);
    //     });
    //     this.props.uiNotificationsActions.clearErrorMessages();
    // }
    async onChangePeriod(period) {
        try {
            const { chartActions, companySymbol } = this.props;
            await chartActions.setPeriod(period);
            if(companySymbol) chartActions.fetchChartPoints(companySymbol, period);
        } catch(error) {
            console.log(error)
        }
    }
    componentDidMount() {
        const { chartActions } = this.props;
        const symbol = this.props.match.params.symbol;
        chartActions.clearCompanyData();
        if(symbol) this.onSearchSubmit(symbol);
    }
    componentDidUpdate(prevProps, prevState) {
        const symbol = this.props.match.params.symbol;
        if(symbol!==prevProps.match.params.symbol) this.onSearchSubmit(symbol);
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
                <PopupContainer ref={this.popup} />
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