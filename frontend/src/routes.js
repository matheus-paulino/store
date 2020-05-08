import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'
import Dashboard from '././pages/Dashboard'
import RegisterProduct from '././pages/RegisterProduct'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/product/new" component={RegisterProduct} />
            </Switch>
        </BrowserRouter>
    );
}