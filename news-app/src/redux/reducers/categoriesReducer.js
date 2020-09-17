import { GET_CATEGORIES_DONE } from '../actions';
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
