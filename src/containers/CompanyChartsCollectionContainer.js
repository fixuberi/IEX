import { connect } from 'react-redux';
import CompanyChartsCollection from '../components/CompanyChartsCollection';
import { store } from '../index';

function mapStateToProps() {
    const state = store.getState().chartPoints;
    return {
        data: state.data,
        isFetching: state.isFetching
    }
}

const CompanyChartsCollectionContainer = connect(
    mapStateToProps
)(CompanyChartsCollection);

export default CompanyChartsCollectionContainer;