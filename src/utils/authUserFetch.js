import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchUserData=async ()=>{
    const response = await axios.get(
        BASE_URL + "/getuser",
        {
          withCredentials: true,
        }
      );
      return response?.data?.data;
}

export const refreshToken=async ()=>{
    return await axios.get(BASE_URL + '/refresh', {
        withCredentials: true,
      });
}