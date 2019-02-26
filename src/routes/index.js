import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChartsContainer from '../containers/ChartsContainer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { RegistrationContainer } from '../containers/RegistrationContainer';

export default (
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/" component={ChartsContainer}/>
            <Route exact path="/signup" component={RegistrationContainer}/>
            <Route exact path="/search/:symbol" component={ChartsContainer}/>
            <Route component={NotFound}/>
        </Switch>
    )