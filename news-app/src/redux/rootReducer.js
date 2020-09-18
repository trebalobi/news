import { combineReducers } from 'redux';
import { linksStateReducer } from './reducers/linksStateReducer';
import { topNewsReducer } from './reducers/topNewsReducer';
import { countryChangeReducer } from './reducers/countryChangeReducer';
import {
  readyStateTNReducer,
  readyStateCategoriesReducer,
  readyStateSearchReducer,
} from './reducers/readyStateReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { viewNewsItemReducer } from './reducers/viewNewsItemReducer';

export const initialState = {
  //initReady: false,
  initReadyTN: false,
  initReadyCategories: false,
  initReadySearch: false,
  linksState: false,
  country: 'gb',
  topNews: [],
  categories: [],
  newsItem: { title: '', image: '', content: '' },
};

export const rootReducer = combineReducers({
  linksState: linksStateReducer,
  topNews: topNewsReducer,
  country: countryChangeReducer,
  categories: categoriesReducer,
  newsItem: viewNewsItemReducer,
  initReadyTN: readyStateTNReducer,
  initReadyCategories: readyStateCategoriesReducer,
  initReadySearch: readyStateSearchReducer,
});
//this is the root reducer which combines all others
