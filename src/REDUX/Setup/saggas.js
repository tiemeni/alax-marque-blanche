import { all } from "@redux-saga/core/effects";
import CommonSaga from "../Common/sagas";


/**
 * @description combine sagas
 */
export default function* Sagas() {
    yield all([CommonSaga()])
}