import axios from "axios";

const BASE_URL = "https://api-gdfx.vercel.app/api";

const AUTH_KEY = "auth";

// Create axios instance
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =======================
   Request Interceptor
======================= */
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const authRaw = sessionStorage.getItem(AUTH_KEY);

      if (authRaw) {
        try {
          const auth = JSON.parse(authRaw); // ✅ FIX

          if (auth?.token) {
            config.headers.Authorization = `Bearer ${auth.token}`;
          }
        } catch (err) {
          console.error("Invalid auth data in sessionStorage");
        }
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* =======================
   Response Interceptor
======================= */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(AUTH_KEY);

        // prevent infinite redirect loop
        if (!window.location.pathname.includes("/login")) {
          window.location.replace("/login");
        }
      }
    }
    return Promise.reject(error);
  },
);
