import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import * as serviceWorker from './serviceWorker';

// import {setCompanySymbol} from './actions/companySymbolActions';
// import { fetchCompanyData } from './actions/companyDataActions';
// import { fetchChartPoints } from './actions/chartPointsActions';

// const store = createStore(rootReducer, 
//                           applyMiddleware(thunkMiddleware));
// store.dispatch(setCompanySymbol('aapl'));
// store.dispatch(fetchCompanyData(store.getState().companySymbol));
// store.dispatch(fetchChartPoints(store.getState().companySymbol), store.getState().period);
// setTimeout(()=> console.log(store.getState()), 5000)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
