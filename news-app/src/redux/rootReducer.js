import { combineReducers } from 'redux';
import { linksStateReducer } from './reducers/linksStateReducer';
import { apiCallsReducer } from './reducers/apiCallsReducer';
import { countryChangeReducer } from './reducers/countryChangeReducer';

export const initialState = {
  initReady: false,
  linksState: false,
  country: 'gb',
  topNews: [],
};

export const rootReducer = combineReducers({
  linksState: linksStateReducer,
  topNews: apiCallsReducer,
  initReady: apiCallsReducer,
  country: countryChangeReducer,
});
//this is the root reducer which combines all others
