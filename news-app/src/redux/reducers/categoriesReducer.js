import {
  CURRENT_CATEGORY_CHANGE,
  GET_CATEGORIES_DONE,
  GET_CATEGORY_DONE,
} from '../actions';
import { initialState } from '../rootReducer';

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_DONE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const setCurrentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_CATEGORY_CHANGE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_DONE: {
      console.log(action.payload, 'u reduceru ');
      return action.payload;
    }
    default:
      return state;
  }
};
