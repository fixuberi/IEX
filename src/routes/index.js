import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChartsContainer from '../containers/ChartsContainer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { RegistrationContainer } from '../containers/RegistrationContainer';
import { LoginContainer } from '../containers/LoginContainer';
import ProfileContainer from '../containers/ProfileContainer';


const User = require('oauthio-web').User;

class ConditionalChartsRoute extends React.Component {
    render() {
        const { component: Component, ...props } = this.props;
        return(
            <Route 
                {...props}
                render={ props => (
                    User.isLogged() ? 
                    <Component isLogged={true} {...props} /> : 
                    <Component isLogged={false} {...props} />
                )}
            />
        );
    }
}
class ProtectedProfileRoute extends React.Component {
    render() {
        const { component: Component, ...props } = this.props;
        return(
            <Route 
                {...props}
                render={ props => (
                    User.isLogged() ?
                    <Component {...props} /> :
                    <Redirect to="/signin" />
                )}
            />
        );
    }
}

export default (
        <Switch>            
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={RegistrationContainer}/>
            <Route exact path="/signin" component={LoginContainer}/>
            <ConditionalChartsRoute exact path="/search/:symbol?" component={ChartsContainer} />
            <ProtectedProfileRoute exact path="/profile" component={ProfileContainer}/>
            <Route component={NotFound}/>
        </Switch>
    )