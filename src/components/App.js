import React from 'react';
import SearchFormContainer from '../containers/SearchFormContainer';
import CompanyInfoContainer from '../containers/CompanyInfoContainer';
import CompanyChartsCollectionContainer from '../containers/CompanyChartsCollectionContainer';
import PeriodSelectorContainer from '../containers/PeriodSelectorContainer';

const App = () => (
    <div>
        <SearchFormContainer />
        <PeriodSelectorContainer />
        <CompanyInfoContainer />
        <CompanyChartsCollectionContainer />
    </div>
)
export default App;