import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import "bootstrap";
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
        <HashRouter>
            <div>
                <Route path='/' component={Navigation}>
                </Route>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/*' component={NotFound} />
                </Switch>
            </div>
        </HashRouter>
        <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);
