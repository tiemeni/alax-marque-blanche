import { SAY_HELLO, SELECT_CARD_TO_SHOW, SET_FLOW } from "./types"

export const sayHelloWorld = (payload) => ({ type: SAY_HELLO, payload })
export const setWitchCardToOpen = payload => ({ type: SELECT_CARD_TO_SHOW, payload })
export const isComptePatient = () => ({ type: SET_FLOW })