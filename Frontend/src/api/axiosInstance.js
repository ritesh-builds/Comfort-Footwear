import axios from "axios";

const getBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ) {
    return "http://localhost:8080";
  }
  return "https://comfort-footwear.onrender.com";
};

export const API_BASE_URL = getBaseUrl();

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken: refreshToken,
        });

        const newAccessToken = response.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);

        // Original request
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(error.config);
      } catch (refreshError) {
        console.log("Refresh token expired/invalid");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;