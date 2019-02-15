import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { setCompanySymbol } from '../actions/companySymbolActions';
import { fetchCompanyData } from '../actions/companyDataActions';
import { fetchChartPoints } from '../actions/chartPointsActions';
import { store } from '../index';

const mapDispatchToProps = () => {
    return {
        onSubmit: (symbol) => {
            store.dispatch(setCompanySymbol(symbol));
            const { companySymbol, period } = store.getState();
            store.dispatch(fetchCompanyData(companySymbol));
            store.dispatch(fetchChartPoints(companySymbol, period));
        }
    }
}
const SearchFormContainer = connect(
    mapDispatchToProps,
)(SearchForm);

export default SearchFormContainer;