import axios from "axios";
import { BASE_URL } from "../utils/constants";


const apiClient=axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if(error.response && error.response.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;

        try {
            await apiClient.get(BASE_URL + '/refresh',null, {
                withCredentials: true,
              });
              console.log('Token Refreshing....')
              return apiClient(originalRequest)
        } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
        // If the refresh token fails, logout the user
        window.location.href = "/signin"; // Redirect to login
        return Promise.reject(refreshError);
            
        }
    }
    return Promise.reject(error); 
  }
);

export default apiClient;