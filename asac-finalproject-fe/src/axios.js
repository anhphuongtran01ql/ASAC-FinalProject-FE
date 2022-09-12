import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    // Only display the data
    const { data } = response;
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
