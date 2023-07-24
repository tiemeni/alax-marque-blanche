import { all } from "@redux-saga/core/effects";
import CommonSaga from "../Common/sagas";
import StepSaga from "../Step/sagas";


/**
 * @description combine sagas
 */
export default function* Sagas() {
    yield all([CommonSaga(), StepSaga()])
}