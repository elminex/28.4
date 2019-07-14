import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Switch } from 'react-router-dom';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import "bootstrap";

render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById('root')
);
