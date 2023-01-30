import { RESET_APP, SAY_HELLO } from "./types"

const INITIAL_STATE = {
}


export const CommonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAY_HELLO:
            return {
                ...state,
                hello: action.payload
            }
        case RESET_APP:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}