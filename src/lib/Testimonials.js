import { api } from "./api";

export const getActiveTestimonials = async () => {
  try {
    const { data } = await api.get("/testimonials/active");
    return data;
  } catch (error) {
    console.error("Get Active Testimonials API error:", error.response || error);
    throw new Error(error.response?.data?.message || "Failed to fetch active testimonials");
  }
};