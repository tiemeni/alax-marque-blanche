import { STEP0, STEP1, STEP2, STEP3, STEP4 } from "../Constants/steps"

export const getActuelStepById = (steps, key) => {
    return steps[key]
}

export const transformStepIntoNumber = step => {
    let result;
    switch (step) {
        case STEP0:
            result = 1; break;
        case STEP1:
            result = 2; break;
        case STEP2:
            result = 3; break;
        case STEP3:
            result = 4; break;
        case STEP4:
            result = 5; break;
        default: 
        
    }

    return result
}

export const transformStepIntoTab = step => {
    let result;
    switch (step) {
        case STEP0:
            result = [0]; break;
        case STEP1:
            result = [0, 1]; break;
        case STEP2:
            result = [0, 1, 2]; break;
        case STEP3:
            result = [0, 1, 2, 3]; break;
        case STEP4:
            result = [0, 1, 2, 3, 4]; break;
        default:
            result = []
    }
    return result;
}

export const allFieldsSet = (tab) => {
    let count = 0;
    for (let el of tab) {
        el && count++;
    }
    return tab.length === count;
}