import { GET_TOP_NEWS_DONE } from '../actions';
import { initialState } from '../rootReducer';

export const apiCallsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_NEWS_DONE: {
      return {
        ...state,
        topNews: action.payload.articles,
        initReady: true,
      };
    }
    default:
      return state;
  }
};
