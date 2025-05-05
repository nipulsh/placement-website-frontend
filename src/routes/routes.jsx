import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import Login from "../auth/login";
import Signup from "../auth/signup";
import StudentDashboard from "../roles/student/dashboard/dashboard";
import Companies from "../roles/student/companies/companies";
import StudentPortfolio from "../roles/student/bio-data/portfolio";
import StudentMessages from "../roles/student/messages/messages";
import StudentNews from "../roles/student/news/announcements";
import CVManager from "../components/CVManager";
import Navbar from "../components/navbar";
import FacultyDashboard from "../roles/faculty/dashboard/dashboard";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  // If a role is specified, check if the user has the correct role
  if (role && user.role !== role) {
    // Redirect to the correct dashboard for the user's role
    if (user.role === "faculty") return <Navigate to="/faculty/dashboard" />;
    if (user.role === "student") return <Navigate to="/dashboard" />;
    // Add more roles as needed
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Student Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Faculty Dashboard */}
      <Route
        path="/faculty/dashboard"
        element={
          <ProtectedRoute role="faculty">
            <FacultyDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/companies"
        element={
          <ProtectedRoute role="student">
            <Companies />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portfolio"
        element={
          <ProtectedRoute role="student">
            <StudentPortfolio />
          </ProtectedRoute>
        }
      />

      <Route
        path="/messages"
        element={
          <ProtectedRoute role="student">
            <StudentMessages />
          </ProtectedRoute>
        }
      />

      <Route
        path="/announcements"
        element={
          <ProtectedRoute role="student">
            <StudentNews />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cv"
        element={
          <ProtectedRoute role="student">
            <CVManager />
          </ProtectedRoute>
        }
      />

      {/* Default route: redirect based on user role */}
      <Route path="/" element={<RoleBasedRedirect />} />
    </Routes>
  );
};

// Helper component to redirect to the correct dashboard based on user role
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === "faculty") return <Navigate to="/faculty/dashboard" />;
  if (user.role === "student") return <Navigate to="/dashboard" />;
  // Add more roles as needed
  return <Navigate to="/login" />;
};

export default AppRoutes;
