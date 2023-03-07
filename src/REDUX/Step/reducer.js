import { outputs } from "../../Constants/outputsLabelForFirstStep";
import { STEP, STEP0 } from "../../Constants/steps";
import {
    ACTIVATE_STEP,
    CHANGE_STEP,
    CREATE_STEP,
    EDITE_STEP,
    MOVE_TO_NEXT_STEP,
    MOVE_TO_PREVIEW_STEP
} from "./types";


const INITIAL_STATE = {
    steps: {
        [STEP0]: {
            subStep: STEP0,
            outputs: outputs,
            inputs: {
                selectedMotif: null,
                selectedRegion: null,
                selectedVille: null,
                selectedClinique: null,
                selectedPraticien: null
            }
        }
    },
    activeStepIndex: STEP0,
}

export const StepReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_STEP:
            let actualSteps = state.steps
            actualSteps[action.payload?.key] = action.payload.step
            return {
                ...state,
                steps: { ...actualSteps }
            }
        case EDITE_STEP:
            let actualStepsToUpdate = state.steps
            actualStepsToUpdate[action.payload.key].inputs =
            {
                ...actualStepsToUpdate[action.payload.key].inputs,
                ...action.payload.inputs
            }
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
        case CHANGE_STEP:
            const { step, subStep } = action.payload;
            const allSteps = state.steps
            const concernedStep = allSteps[step]
            concernedStep.subStep = subStep
            allSteps[step] = concernedStep;
            return {
                ...state,
                steps: { ...allSteps },
                activeStepIndex: step
            }
        default:
            return {
                ...state,
            }
    }
}