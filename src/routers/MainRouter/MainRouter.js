import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Carts from './../../containers/Carts/Carts';
import Order from './../../containers/Order/Order';
import Success from './../../components/UI/Success/Success';

const MainRouter = ({ result }) => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Carts} />
                <Route path="/order/:id" exact component={Order} />
                {!!result.length === 0 ? null : <Route path="/success" exact component={Success} />}
                <Redirect to="/" />
            </Switch>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        result: state.resultReducer.result,
    };
};

export default connect(mapStateToProps)(MainRouter);
