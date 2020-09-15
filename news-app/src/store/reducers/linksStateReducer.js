import { LINKS_STATE_CHANGE } from '../actions/actions';
import { initialState } from './rootReducer';

export const linksStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINKS_STATE_CHANGE: {
      return {
        ...state,
        linksState: action.payload,
      };
    }
    default:
      return state;
  }
};
