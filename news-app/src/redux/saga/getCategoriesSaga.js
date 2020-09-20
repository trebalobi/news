import { takeLatest /*takeEvery*/ } from 'redux-saga/effects';
import { call, put, all /*fork*/ } from 'redux-saga/effects';
import { getCategoryPreview } from '../../api/services';

import {
  GET_CATEGORIES_REQUESTED,
  GET_CATEGORIES_DONE,
  INIT_READY_CHANGE_CATEGORIES,
} from '../actions';

function* callGetCategoryPreview(payload) {
  const cat = yield all(
    payload.categories.map((category) =>
      call(getCategoryPreview, payload.country, category)
    )
  );

  yield put({ type: GET_CATEGORIES_DONE, payload: cat });
  yield put({ type: INIT_READY_CHANGE_CATEGORIES, payload: true });
}

export function* getCategoryPreviewSaga() {
  yield takeLatest(GET_CATEGORIES_REQUESTED, callGetCategoryPreview);
}
