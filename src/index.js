import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import thunkMiddleware from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, 
                          applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
