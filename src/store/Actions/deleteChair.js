import { DELETE_CHAIR } from "../TypeActions/typeAction"

export const deleteChair = (chair,hang) => {
    return {
        type: DELETE_CHAIR,
        payload: {
            chair,
            hang,
        }
    }
}