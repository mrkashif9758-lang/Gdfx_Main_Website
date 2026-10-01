import axios from "axios";
import { GetAllBlogFail, GetAllBlogRequest, GetAllBlogSuccess } from "../reducers/blogReducers";
import toast from "react-hot-toast";

// const BlogServer = "http://localhost:1001/api/v2";
const BlogServer = "https://gdfx-blog-server.vercel.app/api/v2";


export const GetAllBlog = () => async (dispatch) => {
    try {
        dispatch(GetAllBlogRequest());

        const { data } = await axios.get(
            `${BlogServer}/blog/all`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch(GetAllBlogSuccess(data));
    } catch (error) {
        dispatch(
            GetAllBlogFail(
                error?.response?.data?.message || "get all blog failed"
            )
        );
        // toast.error(error.response.data.message || "get all blog failed");
    }
};
