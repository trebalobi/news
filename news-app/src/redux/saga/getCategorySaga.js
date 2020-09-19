import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategory } from '../../api/services';
import {
  GET_CATEGORY_DONE,
  GET_CATEGORY_REQUESTED,
  INIT_READY_CHANGE_CATEGORY,
} from '../actions';

function* callGetCategory(payload) {
  const category = yield call(getCategory, payload.country, payload.category);
  yield put({ type: GET_CATEGORY_DONE, payload: category });
  yield put({ type: INIT_READY_CHANGE_CATEGORY, payload: true });
}

export function* getCategorySaga() {
  yield takeLatest(GET_CATEGORY_REQUESTED, callGetCategory);
}
