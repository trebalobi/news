import { LINKS_STATE_CHANGE } from '../actions';
import { initialState } from '../rootReducer';

export const linksStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINKS_STATE_CHANGE: {
      return action.payload;
    }
    default:
      return state;
  }
};
