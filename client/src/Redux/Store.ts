import { createStore, AnyAction, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducers, { RootState } from "./Reducers/Reducers";

const bindMiddleware = (middleware: any) => {
    return applyMiddleware(...middleware)
};

const reducer = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return reducers(state, action)
    }
};
const initStore = () => createStore(reducer, bindMiddleware([thunk]));

export const wrapper = createWrapper(initStore);;