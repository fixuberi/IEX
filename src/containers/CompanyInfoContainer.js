import { connect } from 'react-redux';
import CompanyInfo from '../components/CompanyInfo';
import { store } from '../index';

function mapStateToProps() {
    const state = store.getState().companyData;
    return {
        data: state.data,
        isFetching: state.isFetching
    }
}

const CompanyInfoContainer = connect(
    mapStateToProps
)(CompanyInfo);

export default CompanyInfoContainer;