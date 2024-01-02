import { all, fork } from "redux-saga/effects";
import { watchLandingPageSaga, watchUserSignUpSaga,watchUserProfileUpdateSaga } from "./LandingPageSaga";

export default function* combinedSaga() {
  yield all([fork(watchLandingPageSaga), fork(watchUserSignUpSaga), fork(
    watchUserProfileUpdateSaga
  )]);
}
