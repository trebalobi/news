import { createStore } from 'redux';
import { rootReducer, initialState } from './reducers/rootReducer';

const store = createStore(rootReducer, initialState);

export default store;
