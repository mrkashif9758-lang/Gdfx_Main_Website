import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const ContactReducer = createSlice({
  name: "contact",
  initialState,
  reducers: {
    CreateContactRequest: (state) => {
      state.loading = true;
    },
    CreateContactSuccess: (state, action) => {
      state.loading = false;
      state.contacts = action.payload.contacts;
    },
    CreateContactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { CreateContactFail,CreateContactRequest,CreateContactSuccess } =
  ContactReducer.actions;

export default ContactReducer.reducer;
