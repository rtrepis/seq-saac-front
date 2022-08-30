import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterFormPage from "./pages/RegisterFormPage";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<RegisterFormPage />} />
      </Routes>
    </>
  );
};

export default App;
