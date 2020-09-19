import { takeLatest /*takeEvery*/ } from 'redux-saga/effects';
import { call, put, all /*fork*/ } from 'redux-saga/effects';
import { getTopNews } from '../../api/services';

import {
  GET_TOP_NEWS_REQUESTED,
  GET_TOP_NEWS_DONE,
  INIT_READY_CHANGE_TN,
  INIT_READY_CHANGE_SEARCH,
} from '../actions';

function* callGetTopNews(country) {
  const topNews = yield call(getTopNews, country.payload);

  yield put({ type: GET_TOP_NEWS_DONE, payload: topNews });
  yield all([
    put({ type: INIT_READY_CHANGE_TN, payload: true }),
    put({ type: INIT_READY_CHANGE_SEARCH, payload: true }),
  ]);
}

export function* getTopNewsSaga() {
  yield takeLatest(GET_TOP_NEWS_REQUESTED, callGetTopNews);
}
