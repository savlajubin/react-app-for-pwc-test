import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  USER_REQUEST,
  usersuccess,
  userfailure
} from "../reducers/user.reducer";

const GET_USER_URL = "http://localhost:3001/api/users";
// const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";

export const getUserAction = () => {
  return axios.get(GET_USER_URL);
};

export function* getUser() {
  try {
    const response = yield call(getUserAction);
    yield put(usersuccess(response.data));
  } catch (error) {
    const errorResponse = { code: 500, message: "unknown error" };
    yield put(userfailure(errorResponse));
  }
}

const registrationSagas = [takeLatest(USER_REQUEST, getUser)];

export default registrationSagas;
