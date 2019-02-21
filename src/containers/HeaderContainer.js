import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import Popup from '../components/Popup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chartPointsActions from '../actions/chartPointsActions';
import * as periodActions from '../actions/periodActions';
import * as companyDataActions from '../actions/companyDataActions';
import * as companySymbolActions from '../actions/companySymbolActions';
import * as uiNotificationsActions from '../actions/uiNotificationsActions';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background: #555;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const GoBackButton = styled.div`
    height: 100%;
    width: 4em;
    margin-right: 1em;
    background: red;
`;
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Navigation = styled.div`

`;
const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PopupWrapper = styled.div`
    position: absolute;
    top: 10vh;
    right: 0;
    width: 30%;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
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
    showError(errors) {
        errors.forEach((el) => {
            this.popup.current.error({ msg: el}, 2000);
        });
        this.props.chartActions.clearAllMessages();
    }
    onHeaderSearchSubmit = (str) => {
        this.onSearchSubmit(str)
        this.props.history.push(`/search/${str}`);
    }
    render() {
        return(
            <HeaderWrapper>
                <GoBackButton />
                <HeaderContent>
                    <Navigation />
                    <Search>
                        <SearchForm onSubmit={this.onHeaderSearchSubmit.bind(this)} />
                    </Search>
                </HeaderContent>
                <PopupWrapper>
                    <Popup ref={this.popup} />
                </PopupWrapper>
            </HeaderWrapper>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        currPeriod: state.period,
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
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
