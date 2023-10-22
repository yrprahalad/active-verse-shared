import { USER_LOGIN, UserLogin } from "./types";
import { takeEvery, takeLatest, put, delay, select } from 'redux-saga/effects'

function* userLogin(action: UserLogin) {

};


export function* watchUserLogin() {
    yield takeLatest(USER_LOGIN, userLogin);
};
