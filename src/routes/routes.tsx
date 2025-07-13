import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import CalendarView from "../pages/CalendarView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calendar" element={<CalendarView />} />
    </Routes>
  );
};

export default AppRoutes;
