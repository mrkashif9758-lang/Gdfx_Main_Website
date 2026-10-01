import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../store";
import { GetAllJobFail, GetAllJobRequest, GetAllJobSuccess } from "../reducers/jobReducers";

  
export const AllJobApi = () => async (dispatch) => {
    try {
        dispatch(GetAllJobRequest());

        const { data } = await axios.get(
            `${server}/job/all`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        
        dispatch(GetAllJobSuccess(data));
    } catch (error) {
        dispatch(GetAllJobFail(error?.message));
        // toast.error(error?.response?.data?.message || "get all job failed");

    }
};