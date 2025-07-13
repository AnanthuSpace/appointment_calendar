import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import CalendarView from "../pages/CalendarView";
import ProtectedRoute from "@/components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      
      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <CalendarView />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
