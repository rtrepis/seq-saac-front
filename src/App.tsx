import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import { useDispatch } from "react-redux";
import { userLoginActionCreator } from "./app/userSlice";
import { decodeToken } from "./utils/auth";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const isUserLogged = localStorage.getItem("userToken");

  if (isUserLogged != null) {
    const userLogged = decodeToken(isUserLogged);
    dispatch(userLoginActionCreator(userLogged));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
