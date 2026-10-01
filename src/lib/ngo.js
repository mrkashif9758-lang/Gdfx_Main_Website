import { api } from "./api";

export const registerNgo = async (ngoData) => {
  try {
    const { data } = await api.post("/ngo/register", ngoData);
    return data;
  } catch (error) {
    console.error("NGO Registration API error:", error.response || error);
    throw new Error(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
};