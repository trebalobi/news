import { getTopNewsSaga } from './saga/getTopNewsSaga';
import { getCategoryPreviewSaga } from './saga/getCategoriesSaga';
import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(getTopNewsSaga), fork(getCategoryPreviewSaga)]);
}
