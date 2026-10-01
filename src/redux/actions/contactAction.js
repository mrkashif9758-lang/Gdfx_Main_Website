import toast from "react-hot-toast";
import { server } from "../store";
import axios from "axios";
import {
  CreateContactFail,
  CreateContactRequest,
  CreateContactSuccess,
} from "../reducers/contactReducers";

export const CreateContact =
  (name, email, phone, message) => async (dispatch) => {
    try {
      dispatch(CreateContactRequest());

      const { data } = await axios.post(
        `${server}/contact/message`,
        { name, email, phone, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      dispatch(CreateContactSuccess(data));
      toast.success(data.message);
    } catch (error) {
      dispatch(
        CreateContactFail(
          error.response.data.message || "get all contact failed"
        )
      );
      // toast.error(error.response.data.message || "get all contact failed");
    }
  };
