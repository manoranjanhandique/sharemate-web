import { BASE_URL } from "../utils/constants";
import apiClient from "./apiClient";

export const fetchGroup = async () => {
  const response = await apiClient.get(BASE_URL + "/get-group-list", {
    withCredentials: true,
  });
  return response?.data?.data;
};

export const createGroup= async (groupFormData) =>{
    const response = await apiClient.post(
      BASE_URL + "/create-group",
      groupFormData,
      {
        withCredentials: true,
      }
    );
    return response?.data?.data;
}

export const updateGroup=async (id, data)=>{
    const response = await apiClient.patch(
        BASE_URL + `/add-members/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response?.data?.data;
}

export const closedGroup=async (id)=>{
    const response = await apiClient.patch(
        BASE_URL + `/close-group/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      return response?.data?.data;
}

export const fetchClosedGroup=async ()=>{
    const response = await apiClient.get(BASE_URL + "/get-close-group",
        {
          withCredentials: true,
        }
      );
      return response?.data?.data;
}