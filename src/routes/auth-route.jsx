import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/login";
import ResetPassword from "../auth/reset-password";
import GenerateOtp from "../auth/generate-opt";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/generate-otp" element={<GenerateOtp />} />
    </Routes>
  );
};

export default AuthRoute;
