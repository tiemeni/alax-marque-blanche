import { ACTIVATE_STEP, CHANGE_STEP, CREATE_STEP, EDITE_STEP, MOVE_TO_NEXT_STEP, MOVE_TO_PREVIEW_STEP } from "./types"

export const createStep = payload => ({ type: CREATE_STEP, payload })
export const editeStep = payload => ({ type: EDITE_STEP, payload })
export const activateStep = payload => ({ type: ACTIVATE_STEP, payload })
//not to be used anymore for now...
export const moveToNextStep = payload => ({ type: MOVE_TO_NEXT_STEP, payload })
export const moveToPrevStep = payload => ({ type: MOVE_TO_PREVIEW_STEP, payload })
//-------------
export const changeStep = payload => ({ type: CHANGE_STEP, payload })
// export const getStepByKey = payload => ({ type: GET_STEP_BY_KEY, payload })