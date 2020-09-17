import { GET_TOP_NEWS_DONE } from '../actions';
import { initialState } from '../rootReducer';

export const topNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_NEWS_DONE: {
      return action.payload.articles;
    }
    default:
      return state;
  }
};
