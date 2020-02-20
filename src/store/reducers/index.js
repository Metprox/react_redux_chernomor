import { combineReducers } from 'redux';

import { servicesReducer } from './services';
import { resultReducer } from './result';

export default combineReducers({ servicesReducer, resultReducer });
