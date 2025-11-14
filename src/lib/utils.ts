import { ActionState } from "./GlobalTypes";

export const parseServerActionResponse = <T>(response: ActionState<T>) => {
    return JSON.parse(JSON.stringify(response));
}

