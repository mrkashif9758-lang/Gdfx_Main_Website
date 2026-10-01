import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogReducers";
import jobReducer from "./reducers/jobReducers";
import CaseStudyReducer from "./reducers/caseStudyReducer";
import ContactReducer from './reducers/contactReducers'

// export const server = "http://localhost:1000/api/v1";
export const server = "https://gdfx-server-nu.vercel.app/api/v1";


// export const server = "https://render-server-xu0h.onrender.com/api/v1";




const Store = configureStore({
    reducer: {
        blogContainer: blogReducer,
        jobContainer: jobReducer,
        caseStudyContainer: CaseStudyReducer,
        contactContainer:ContactReducer,

    },
    // preloadedState: initialState,
});
export default Store;
