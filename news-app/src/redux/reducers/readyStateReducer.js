import { INIT_READY_CHANGE } from '../actions';
import { initialState } from '../rootReducer';

export const readyStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_READY_CHANGE: {
      return action.payload;
    }
    default:
      return state;
  }
};
