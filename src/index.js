import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers/index';

import App from '@/containers/App/App';
import '@/assets/scss/app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware)),
);

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
