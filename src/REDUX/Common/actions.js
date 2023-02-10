import { SAY_HELLO, SELECT_CARD_TO_SHOW } from "./types"

export const sayHelloWorld = (payload) => ({ type: SAY_HELLO, payload })
export const setWitchCardToOpen = payload => ({ type: SELECT_CARD_TO_SHOW, payload })