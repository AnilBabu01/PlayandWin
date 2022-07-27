import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Resetpassword from "./components/auth/login/passwordlogin/Resetpassword";
import Signup from "./components/auth/signup/Signup";
import Fiewin from "./components/fiewin/Fiewin";
import Task from "./components/fiewin/taskreward/Task";
import FastParityTap from "./components/games/fast/FastParityTap";
import Invite from "./components/invite/Invite";
import My from "./components/my/My";
import Recharge from "./components/recharge/Recharge";
const Main = () => {
  
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fiewin" element={<Fiewin/>} />
          <Route path="/invite" element={<Invite/>} />
          <Route path="/recharge" element={<Recharge/>} />
          <Route path="/my" element={<My/>} />
          <Route path="/games/fast-parity" element={<FastParityTap/>} />
          <Route path="/reset-password" element={<Resetpassword/>} />
          <Route path="/task" element={<Task/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Main;
