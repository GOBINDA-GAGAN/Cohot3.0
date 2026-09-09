import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/LoginPage";
import Register from "./pages/auth/RegisterPage";
import ForgotPassword from "./pages/auth/ForgotPassword";

const App = () => {
  return (
 
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />



        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

  );
};

export default App;
