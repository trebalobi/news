import { combineReducers } from 'redux';
import { linksStateReducer } from './reducers/linksStateReducer';
import { topNewsReducer } from './reducers/topNewsReducer';
import { countryChangeReducer } from './reducers/countryChangeReducer';
import {
  readyStateTNReducer,
  readyStateCategoriesReducer,
  readyStateSearchReducer,
  readyStateCategoryPageReducer,
} from './reducers/readyStateReducer';
import {
  categoriesReducer,
  categoryReducer,
  setCurrentCategoryReducer,
} from './reducers/categoriesReducer';
import { viewNewsItemReducer } from './reducers/viewNewsItemReducer';

export const initialState = {
  //initReady: false,
  initReadyTN: false,
  initReadyCategories: false,
  initReadySearch: false,
  initReadyCategoryPage: false,
  linksState: false,
  country: 'gb',
  topNews: [],
  categories: [],
  newsItem: { title: '', image: '', content: '' },
  currentCategory: '',
  category: [],
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
  initReadyCategoryPage: readyStateCategoryPageReducer,
  currentCategory: setCurrentCategoryReducer,
  category: categoryReducer,
});
//this is the root reducer which combines all others
