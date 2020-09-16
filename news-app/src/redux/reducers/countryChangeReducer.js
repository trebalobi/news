import { COUNTRY_CHANGE } from '../actions';
import { initialState } from '../rootReducer';

export const countryChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_CHANGE: {
      return action.payload;
    }
    default:
      return state;
  }
};
