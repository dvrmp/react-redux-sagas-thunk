import { call, put, takeEvery, spawn} from 'redux-saga/effects';
import { CALL_API_USERS, CALL_API_USERS_SUCCESS, CALL_API_USERS_FAILED } from '../../redux/actions-types/users.actions';
import axios from 'axios';

export function* usersSaga(){
    yield spawn(watchGetUsersAsync);
}

function* watchGetUsersAsync(){
    yield takeEvery(CALL_API_USERS, fetchUser);
}

function* fetchUser(action) {
    try {
       const response = yield call(axios.get, 'https://reqres.in/api/users?page=2');
       yield put({type:CALL_API_USERS_SUCCESS ,payload:response.data.data});
    } catch (e) {
       yield put({type: CALL_API_USERS_FAILED,payload: e}); // CHECK RETURN ERROR RESPONSE
    }
 }
 