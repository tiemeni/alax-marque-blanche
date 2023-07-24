import { outputs } from "../../Constants/outputsLabelForFirstStep";
import * as screens from "../../Constants/steps";
import * as types from "./types";


const INITIAL_STATE = {
    steps: {
        [screens.STEP0]: {
            subStep: screens.STEP0,
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
    stepAccount: screens.ACCUEIL,
    activeStepIndex: screens.STEP0,
}

export const StepReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.CREATE_STEP:
            let actualSteps = state.steps
            actualSteps[action.payload?.key] = action.payload.step
            return {
                ...state,
                steps: { ...actualSteps }
            }
        case types.EDITE_STEP:
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
        case types.ACTIVATE_STEP:
            return {
                ...state,
                activeStepIndex: action.payload.key
            }
        case types.MOVE_TO_NEXT_STEP:
            let actualStepIndex = state.activeStepIndex
            actualStepIndex++
            return {
                ...state,
                actualStepIndex
            }
        case types.MOVE_TO_PREVIEW_STEP:
            let actualStepIndexToPreview = state.activeStepIndex
            if (actualStepIndexToPreview > 0) {
                actualStepIndexToPreview--
            }
            return {
                ...state,
                actualStepIndexToPreview
            }
        case types.CHANGE_STEP:
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
        case types.CHANGE_SCREEN:
            const {actualStep, nextStep} = action.payload;
            return {
                ...state,
                stepAccount: action.payload
            };
        default:
            return {
                ...state,
            }
    }
}