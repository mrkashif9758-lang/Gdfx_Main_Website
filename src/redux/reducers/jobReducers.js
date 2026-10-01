import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const JobReducer = createSlice({
    name: "job",
    initialState,
    reducers: {
        GetAllJobRequest: (state) => {
            state.loading = true;
        },
        GetAllJobSuccess: (state, action) => {
            state.loading = false;
            state.jobs = action.payload.jobs;
            state.message = action.payload.message;
        },
        GetAllJobFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



    }
});

export const {
    GetAllJobFail, GetAllJobRequest, GetAllJobSuccess
} = JobReducer.actions;

export default JobReducer.reducer;
