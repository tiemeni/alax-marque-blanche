import { RESET_APP, SELECT_CARD_TO_SHOW, SET_FLOW } from "./types"

const INITIAL_STATE = {
    displayedCardTitle: null,
    isComptePatientActive: false
}


export const CommonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_CARD_TO_SHOW:
            return {
                ...state,
                displayedCardTitle: action.payload
            }
        case SET_FLOW:
            let actualState = state.isComptePatientActive
            return {
                ...state,
                isComptePatientActive: !actualState
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