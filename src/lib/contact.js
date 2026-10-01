import { api } from "./api";

export const submitContactInquiry = async (formData) => {
  try {
    const { data } = await api.post("/contact", formData);
    return data;
  } catch (error) {
    console.error("Submit contact form error:", error.response || error);
    throw new Error(error.response?.data?.message || "Failed to send inquiry");
  }
};