import React from 'react';
import SearchFormContainer from '../containers/SearchFormContainer';
import CompanyInfoContainer from '../containers/CompanyInfoContainer';
import CompanyChartsCollectionContainer from '../containers/CompanyChartsCollectionContainer';


const App = () => (
    <div>
        <SearchFormContainer />
        <CompanyInfoContainer />
        <CompanyChartsCollectionContainer />
    </div>
)
export default App;