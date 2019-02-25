import React from 'react';
import ChartsContainer from '../containers/ChartsContainer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { Switch, Route } from 'react-router-dom';

export default (
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/" component={ChartsContainer}/>
            <Route exact path="/search/:symbol" component={ChartsContainer}/>
            <Route component={NotFound}/>
        </Switch>
    )