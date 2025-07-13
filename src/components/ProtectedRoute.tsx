import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return children;
};

export default ProtectedRoute;
