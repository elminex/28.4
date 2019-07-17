import React from 'react';
import { Route, Switch } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';


export default (
    <Route path='/' component={Navigation}>
        <Switch>
            <Route exact patch='/' component={Home} />
            <Route path='contact' component={Contact} />
            <Route path='*' component={NotFound} />
            <Route path='/countries' component={CountryFlagContainer} />
        </Switch>
    </Route>
);