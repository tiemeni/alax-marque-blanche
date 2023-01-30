import { SAY_HELLO } from "./types"

export const sayHelloWorld = (payload) => {
    return {
        type: SAY_HELLO,
        payload
    }
}