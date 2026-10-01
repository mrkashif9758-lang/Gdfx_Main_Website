import { api } from "./api";

export const subscribeNewsletter = async (emailData) => {
  try {
    const { data } = await api.post("/subscribers/subscribe", emailData);
    return data;
  } catch (error) {
    console.error("Subscribe API error:", error.response || error);
    throw new Error(error.response?.data?.message || "Failed to subscribe");
  }
};