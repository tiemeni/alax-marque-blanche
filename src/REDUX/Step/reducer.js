import { ACTIVATE_STEP, CREATE_STEP, EDITE_STEP, MOVE_TO_NEXT_STEP, MOVE_TO_PREVIEW_STEP } from "./types"

const INITIAL_STATE = {
    steps: {
        step1: {
            outputs: {
                firstTitle: "Motif du Rendez-vous",
                secondTitle: "Lieu du Rendez-vous",
            },
            inputs: {
                selectedMotif: null,
                selectedRegion: null,
                selectedVille: null,
            }
        }
    },
    activeStepIndex: 0,
}

export const StepReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_STEP:
            let actualSteps = state.steps
            actualSteps["step" + action.payload?.key] = action.payload.step
            return {
                ...state,
                steps: { ...actualSteps }
            }
        case EDITE_STEP:
            let actualStepsToUpdate = state.steps
            actualStepsToUpdate["step" + action.payload.key].inputs =
                { ...actualStepsToUpdate["step" + action.payload.key].inputs, ...action.payload.inputs }
            return {
                ...state,
                steps: { ...actualStepsToUpdate }
            }
        case ACTIVATE_STEP:
            return {
                ...state,
                activeStepIndex: action.payload.key
            }
        case MOVE_TO_NEXT_STEP:
            let actualStepIndex = state.activeStepIndex
            actualStepIndex++
            return {
                ...state,
                actualStepIndex
            }
        case MOVE_TO_PREVIEW_STEP:
            let actualStepIndexToPreview = state.activeStepIndex
            if (actualStepIndexToPreview > 0) {
                actualStepIndexToPreview--
            }
            return {
                ...state,
                actualStepIndexToPreview
            }
        default:
            return {
                ...state,
            }
    }
}