import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import "jquery";
import "bootstrap";
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-details.component';
import ContinentsContainer from './containers/continent-container.component';

render(
    <Provider store={store}>
        <div>
            <HashRouter>
                <div>
                    <Route component={Navigation} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/countries'>
                            <Route path='/countries/country/:id' component={CountryDetailsContainer} />
                            <Route exact path='/countries' component={CountryFlagContainer} />
                        </Route>
                        <Route path='/contact' component={Contact} />
                        <Route patch='/continents' component={ContinentsContainer} />
                        <Route path='/*' component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);
