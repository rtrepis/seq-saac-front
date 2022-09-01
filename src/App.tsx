import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterFormPage from "./pages/RegisterFormPage";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <div className="title">
        <h1>SEQ-SAAC</h1>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<RegisterFormPage />} />
      </Routes>
    </>
  );
};

export default App;
