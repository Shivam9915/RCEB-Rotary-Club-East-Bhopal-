// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated (you can replace this with your own logic)
  const isAuthenticated = localStorage.getItem("token"); // Example: token stored in localStorage

  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    return <Navigate to="/members/post-login" replace />;
  }
 
  

  // If logged in, render the children (protected component)
  return children;
};

export default ProtectedRoute;
