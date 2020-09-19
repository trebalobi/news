import { getTopNewsSaga } from './saga/getTopNewsSaga';
import {
  getCategoryPreviewSaga,
  getDataOnCountryChangeSaga,
} from './saga/getCategoriesSaga';
import { fork, all } from 'redux-saga/effects';
import { getCategorySaga } from './saga/getCategorySaga';

export default function* rootSaga() {
  yield all([
    fork(getTopNewsSaga),
    fork(getCategoryPreviewSaga),
    fork(getDataOnCountryChangeSaga),
    fork(getCategorySaga),
  ]);
}
