import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/authSlices";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, setregisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let users = [...registerUser, data];
    const isExistUSer = registerUser.find((value) => {
      return value.email === data.email;
    });

    if (isExistUSer) {
      reset();
      toast.error("User alredy exist");
      return;
    }
    setregisterUser(users);
    localStorage.setItem("registerUser", JSON.stringify(users));
    toast.success("User register successfully");
    reset();
  };

  const loginForm = (data) => {
    let user = registerUser.find((value) => {
      return value.email === data.email && value.password === data.password;
    });
    console.log("htt", user);

    if (!user) {
      return toast.error("Invalid user email or password");
    }

    dispatch(addUser(user));

    localStorage.setItem("logedInuser", JSON.stringify(user));
    toast.success("User logged in ....");
    navigate("/main");
    reset();
  };

  const logOut = () => {
    dispatch(removeUser());
    toast.success("Logout....");
    localStorage.removeItem("logedInuser");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
    logOut,
  };
};
