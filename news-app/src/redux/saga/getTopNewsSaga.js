import { takeLatest /*takeEvery*/ } from 'redux-saga/effects';
import { call, put /*all, fork*/ } from 'redux-saga/effects';
import { getTopNews } from '../../api/services';

import { GET_TOP_NEWS_REQUESTED, GET_TOP_NEWS_DONE, INIT_READY_CHANGE } from '../actions';

function* callGetTopNews(country) {
  const topNews = yield call(getTopNews, country.payload);

  yield put({ type: GET_TOP_NEWS_DONE, payload: topNews });
  yield put({ type: INIT_READY_CHANGE, payload: true });
}

export function* getTopNewsSaga() {
  yield takeLatest(GET_TOP_NEWS_REQUESTED, callGetTopNews);
}
