import { createContext, useContext, useState } from "react";

import { api } from "../api/axios";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // Login
  const login = async (credentials) => {
    // API call will go here
    console.log("Login:", credentials);
  };

  // Register
const register = async (userData) => {
  setLoading(true);

  try {
    const response = await api.post("/auth/register", userData);

    console.log("Register response:", response);

    const token = response.data.accessToken;

    console.log("Token from server:", token);
    
    setAccessToken(token);
    
    return response.data;
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
};

console.log("set access token :",accessToken);


  // Logout
  const logout = () => {
    setUser(null);
    setAccessToken(null);
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await api.get("/auth/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    login,
    register,
    logout,
    accessToken,
    setAccessToken,
    getUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
