import Axios from "axios";

export const baseUrl = "http://47.115.57.59:3000";

const axiosInstance = Axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (error) => {
    console.log("网络错误", error);
  }
);

export { axiosInstance };
