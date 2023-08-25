import { CHOICE_CHAIR } from "../TypeActions/typeAction"

export const choiceChair = (element,hang) => {
    return {
        type: CHOICE_CHAIR,
        payload: {
            element,
            hang,
        }
    }
}
