import { AnyAction } from "redux";
import { NewsTypes } from "Redux/Constant/newsTypes";
import { News } from "Types/typings";

interface State {
    message: string,
    news: News[]
}

export const getNews = (state: State = { news: [], message: "" }, action: AnyAction) => {
    switch (action.type) {
        case NewsTypes.GET_NEWS_SUCCESS:
            return {
                news: action.payload.news
            }
        case NewsTypes.GET_NEWS_FAILE:
            return {
                message: action.payload.message
            }
        default:
            return state
    }
}