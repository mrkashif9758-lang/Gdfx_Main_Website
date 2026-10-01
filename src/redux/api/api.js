import toast from "react-hot-toast";
import { server } from "../store";
import axios from "axios";

export const HiringFormApi = async (name, email, phone, resume, jobId) => {
  try {
    const { data } = await axios.post(
      `${server}/hiring/new`,
      { name, email, phone, resume, jobId },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message || "get all contact failed");
  }
};
