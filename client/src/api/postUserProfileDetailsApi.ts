import { call } from "redux-saga/effects";
import { BACKEND_HOST, BACKEND_PATHS } from "constants/constants";
import request from "helpers/request";

export function* postUserProfileDetails(parameters: any, headers: any): any {
  try {
    return yield call(
      request.post,
      `${BACKEND_HOST.LOCAL_HOST}${BACKEND_PATHS.USER_DETAILS}/`,
      parameters,
      headers
    );
  } catch (err) {
  }
}
