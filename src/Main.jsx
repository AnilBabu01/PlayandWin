import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
const Main = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
         <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
