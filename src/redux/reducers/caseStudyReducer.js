import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const CaseStudyReducer = createSlice({
    name: "caseStudy",
    initialState,
    reducers: {

        GetAllCaseStudyRequest: (state) => {
            state.loading = true;
        },
        GetAllCaseStudySuccess: (state, action) => {
            state.loading = false;
            state.caseStudys = action.payload.caseStudys;
        },
        GetAllCaseStudyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
});

export const {
    GetAllCaseStudyFail, GetAllCaseStudyRequest, GetAllCaseStudySuccess
} = CaseStudyReducer.actions;

export default CaseStudyReducer.reducer;
