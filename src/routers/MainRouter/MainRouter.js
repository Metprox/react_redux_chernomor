import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Carts from './../../containers/Carts/Carts';
// import Order from './../../containers/Order/Order';
import Success from './../../components/UI/Success/Success';

export default class MainRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {/* <Route path="/" component={Carts} /> */}
                    {/* <Route path="/" component={Order} /> */}
                    <Route path="/" component={Success} />
                    {/* <Route path="/finished" component={} /> */}
                    <Redirect to="/" />
                </Switch>
            </Fragment>
        );
    }
}
