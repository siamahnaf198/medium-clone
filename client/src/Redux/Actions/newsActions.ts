import { NewsTypes } from "Redux/Constant/newsTypes";
import { sanityClient, urlFor } from "../../../sanity";
import { Dispatch } from "redux";

export const getNews = () => async (dispatch: Dispatch) => {
    const query = `*[_type == "post"] {
        _id,
        title,
        slug,
        description,
        mainImage,
        author-> {
        name,
        image
      }
      }`
    const post = await sanityClient.fetch(query);
    if (post) {
        dispatch({
            type: NewsTypes.GET_NEWS_SUCCESS,
            payload: {
                news: post
            }
        })
    } else {
        dispatch({
            type: NewsTypes.GET_NEWS_FAILE,
            payload: {
                message: "Something went wrong!"
            }
        })
    }
}