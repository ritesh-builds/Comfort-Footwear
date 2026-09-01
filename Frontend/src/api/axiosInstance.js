import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
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

        const response = await axios.post(
          "http://localhost:8080/auth/refresh",
          {
            refreshToken: refreshToken
          }
        );

        const newAccessToken =
          response.data.accessToken;

        localStorage.setItem(
          "accessToken",
          newAccessToken
        );

        // Original request
        error.config.headers.Authorization =
          `Bearer ${newAccessToken}`;

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