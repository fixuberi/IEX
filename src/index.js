import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';

const OAuth = require('oauthio-web').OAuth;
OAuth.initialize('c6BbZQ_tjLtlSqIrVoFg6jeHEn4');
export const store = createStore(rootReducer, 
                          applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
