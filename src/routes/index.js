import React from 'react';
import ChartsContainer from '../containers/ChartsContainer';
import Home from '../components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (
        <div>            
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/" component={ChartsContainer}/>
            <Route exact path="/search/:symbol" component={ChartsContainer}/>
        </div>
    )