import { connect } from 'react-redux';
import PeriodSelector from '../components/PeriodSelector';
import { Periods } from '../actions/periodActions';
import { store } from '../index';

function mapStateToProps() {
    const period = store.getState().period;
    return {
        period: period,
        allOptions: Periods.getSortedArray()
    }
}
function mapDispatchToProps() {
    return {
        onChange: (period) => {
            store.dispatch(setPeriod(period));
            const { companySymbol, period } = store.getState();
            if(companySymbol) {
                store.dispatch(fetchChartPoints(companySymbol, period));
            }
        }
    }
}

const PeriodSelectorContainer = connect(
    mapDispatchToProps,
    mapStateToProps
)(PeriodSelector);

export default PeriodSelectorContainer;