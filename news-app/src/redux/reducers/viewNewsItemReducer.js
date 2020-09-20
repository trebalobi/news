import { VIEW_NEWS_ITEM } from '../actions';
import { initialState } from '../rootReducer';

export const viewNewsItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_NEWS_ITEM: {
      return action.payload;
    }
    default:
      return state;
  }
};
