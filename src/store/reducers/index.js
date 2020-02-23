import { combineReducers } from 'redux';

import { servicesReducer } from './services';
import { resultReducer } from './result';
import { sumReducer } from './sum';

export default combineReducers({ servicesReducer, resultReducer, sumReducer });
