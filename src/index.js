import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import * as serviceWorker from './serviceWorker';

export const store = createStore(rootReducer, 
                          applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
