import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}