import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard from "../roles/student/dashboard/dashboard";
// import { useSelector } from "react-redux";
import CompanyDashboard from "../roles/company/dashboard/dashboard";
import FacultyDashboard from "../roles/faculty/dashboard/dashboard";
import Companies from "../roles/student/companies/companies";
import StudentPortfolio from "../roles/student/bio-data/portfolio";
import StudentMessages from "../roles/student/messages/messages";
import StudentNews from "../roles/student/news/news";
import Default from "../roles/default";
import Login from "../auth/login";
const Routing = () => {
  // const role = useSelector((state) => state.auth.role);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/portfolio" element={<StudentPortfolio />} />
        <Route path="/news" element={<StudentNews />} />
        <Route path="/messages" element={<StudentMessages />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  );
};

export default Routing;
