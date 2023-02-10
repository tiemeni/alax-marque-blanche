import { RESET_APP, SELECT_CARD_TO_SHOW } from "./types"

const INITIAL_STATE = {
    displayedCardTitle: null
}


export const CommonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_CARD_TO_SHOW:
            return {
                ...state,
                displayedCardTitle: action.payload
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