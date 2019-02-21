import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import routes from '../routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';

const HeaderContainerWithRouter = withRouter(HeaderContainer);

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Router>
                <div>
                    <HeaderContainerWithRouter />
                    {routes} 
                </div>
            </Router>
        )
    }
};
