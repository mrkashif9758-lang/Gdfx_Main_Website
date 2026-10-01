import toast from "react-hot-toast";
import axios from "axios";
import { GetAllCaseStudyFail, GetAllCaseStudyRequest, GetAllCaseStudySuccess } from "../reducers/caseStudyReducer";

// const caseStudyServer = "http://localhost:1002/api/v2";

const caseStudyServer = "https://gdfx-case-study-server.vercel.app/api/v2";
    

export const GetAllCaseStudyApi = () => async (dispatch) => {
    try {
        dispatch(GetAllCaseStudyRequest());

        const { data } = await axios.get(
            `${caseStudyServer}/caseStudy/all`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch(GetAllCaseStudySuccess(data));
        // toast.success(data.message);
    } catch (error) {
        dispatch(
            GetAllCaseStudyFail(
                error?.response?.data?.message || " get all CaseStudy failed"
            )
        );
        // toast.error(error?.response?.data?.message || " get all CaseStudy failed");
    }
};

