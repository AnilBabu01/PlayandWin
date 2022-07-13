import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Fiewin from "./components/fiewin/Fiewin";
import FastParity from "./components/games/fast/FastParity";
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
          <Route path="/games/fast-parity" element={<FastParity/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Main;
