import { spawn } from 'redux-saga/effects';
import { usersSaga } from './users/users.saga';

export function* rootSaga() {
    yield spawn(usersSaga);
}