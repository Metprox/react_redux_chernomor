import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Services from './../../containers/Services/Services';
import Additional from './../../containers/Additional/Additional';
import Success from './../../components/UI/Success/Success';

const MainRouter = ({ result }) => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Services} />
                <Route path="/order/:id" exact component={Additional} />
                {result.length >= 2 ? <Route path="/success" exact component={Success} /> : null}
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
