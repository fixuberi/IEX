import React, { Component } from 'react';
import HeaderWithRouter from '../components/Header';
import routes from '../routes'
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Router>
                <div>
                    <HeaderWithRouter />
                    {routes} 
                </div>
            </Router>
        )
    }
};
