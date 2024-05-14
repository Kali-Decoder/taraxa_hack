import React from "react";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/UserDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedBackForm from "./pages/FeedBackForm";
import RegisterUser from "./pages/RegisterPage";
import CompanyDashboard from "./pages/CompanyDashboard";
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/user-dashboard" element={<UserDashBoard />} />
        <Route exact path="/feedback-form" element={<FeedBackForm />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/company-dashboard" element={<CompanyDashboard />} />
      </Routes>
    </>
  );
};

export default App;
