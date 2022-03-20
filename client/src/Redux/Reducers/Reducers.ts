import { combineReducers } from "redux";

//Reducers
import { getNews } from "./newsReducers";

const reducers = combineReducers({
    news: getNews
});

export type RootState = ReturnType<typeof reducers>
export default reducers;
