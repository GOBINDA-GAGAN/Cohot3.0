import axios from "axios";
import { useAuth } from "../context/AuthContext";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

const useApi = () => {
  const { accessToken } = useAuth();
  console.log("Access Token set in API:", accessToken);
  

  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  return api;
};

export default useApi;