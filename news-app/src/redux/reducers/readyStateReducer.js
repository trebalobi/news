import {
  INIT_READY_CHANGE_TN,
  INIT_READY_CHANGE_CATEGORIES,
  INIT_READY_CHANGE_SEARCH,
  INIT_READY_CHANGE_CATEGORY,
} from '../actions';
import { initialState } from '../rootReducer';

export const readyStateTNReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_READY_CHANGE_TN: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const readyStateSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_READY_CHANGE_SEARCH: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const readyStateCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_READY_CHANGE_CATEGORIES: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const readyStateCategoryPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_READY_CHANGE_CATEGORY: {
      return action.payload;
    }
    default:
      return state;
  }
};
