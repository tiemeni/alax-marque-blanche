import * as types from "./types"

export const createStep = payload => ({ type: types.CREATE_STEP, payload })
export const editeStep = payload => ({ type: types.EDITE_STEP, payload })
export const activateStep = payload => ({ type: types.ACTIVATE_STEP, payload })
//not to be used anymore for now...
export const moveToNextStep = payload => ({ type: types.MOVE_TO_NEXT_STEP, payload })
export const moveToPrevStep = payload => ({ type: types.MOVE_TO_PREVIEW_STEP, payload })
//-------------
export const changeStep = payload => ({ type: types.CHANGE_STEP, payload })
// export const getStepByKey = payload => ({ type: GET_STEP_BY_KEY, payload })

export const changeScreen = payload => ({ type: types.CHANGE_SCREEN, payload })