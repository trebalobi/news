import { takeLatest /*takeEvery*/ } from 'redux-saga/effects';
import { call, put, all /*fork*/ } from 'redux-saga/effects';
import { getCategoryPreview, getCategory, getTopNews } from '../../api/services';
import {
  GET_CATEGORIES_DONE,
  INIT_READY_CHANGE_CATEGORIES,
  COUNTRY_CHANGE,
  INIT_READY_CHANGE_SEARCH,
  INIT_READY_CHANGE_TN,
  GET_TOP_NEWS_DONE,
  GET_DATA_ON_COUNTRY_CHANGE_REQUESTED,
  INIT_READY_CHANGE_CATEGORY,
  GET_CATEGORY_DONE,
} from '../actions';

export function* callGetDataOnCountryChange(payload) {
  yield put({ type: COUNTRY_CHANGE, payload: payload.country });

  const cat = yield all(
    payload.categories.map((category) =>
      call(getCategoryPreview, payload.country, category)
    )
  );
  const [topNews, categoryArr] = yield all([
    call(getTopNews, payload.country),
    call(getCategory, payload.country, payload.category),
  ]);

  yield all([
    put({ type: GET_CATEGORIES_DONE, payload: cat }),
    put({ type: INIT_READY_CHANGE_CATEGORIES, payload: true }),
    put({ type: GET_TOP_NEWS_DONE, payload: topNews }),
    put({ type: INIT_READY_CHANGE_TN, payload: true }),
    put({ type: INIT_READY_CHANGE_SEARCH, payload: true }),
    put({ type: GET_CATEGORY_DONE, payload: categoryArr }),
    put({ type: INIT_READY_CHANGE_CATEGORY, payload: true }),
  ]);
}

export function* getDataOnCountryChangeSaga() {
  yield takeLatest(GET_DATA_ON_COUNTRY_CHANGE_REQUESTED, callGetDataOnCountryChange);
}
