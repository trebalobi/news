import { LINKS_STATE_CHANGE } from '../actions/index';
import { initialState } from './index';

export const linksStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINKS_STATE_CHANGE: {
      return {
        ...state,
        linksState: action.disable,
      };
    }
    default:
      return state;
  }
};
