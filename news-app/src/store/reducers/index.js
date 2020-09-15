import { combineReducers } from 'redux';
import { linksStateReducer } from './linksStateReducer';

export const initialState = {
  linksState: false,
};

export const rootReducer = combineReducers({ linksState: linksStateReducer });
//this is the root reducer which combines all others
