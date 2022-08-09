import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Resetpassword from "./components/auth/login/passwordlogin/Resetpassword";
import Signup from "./components/auth/signup/Signup";
import Checkin from "./components/fiewin/checkin/Checkin";
import Withdraw from "./components/fiewin/withdraw/Withdraw";
import Fiewin from "./components/fiewin/Fiewin";
import Task from "./components/fiewin/taskreward/Task";
import FastParityTap from "./components/games/fast/FastParityTap";
import Invite from "./components/invite/Invite";
import My from "./components/my/My";
import Recharge from "./components/recharge/Recharge";
import PaymentMethods from "./components/fiewin/withdraw/addPaymentmethod/PaymentMethods";
import Newupi from "./components/fiewin/withdraw/addPaymentmethod/Newupi";
import Mybank from "./components/fiewin/withdraw/addPaymentmethod/Mybank";
import Paytm from "./components/fiewin/withdraw/addPaymentmethod/Paytm";
import Order from "./components/my/order/Order";
import Modify from "./components/my/modify/Modify";
import Avataruser from "./components/my/modify/Avataruser";
import Nickname from "./components/my/modify/Nickname";
import Changepassword from "./components/my/modify/Changepassword";
import AddID from "./components/my/modify/AddID";
import MineSweeper from "./components/games/mine/MineSweeper";
import LearnRecharge from "./components/fiewin/taskreward/learnrecharge/LearnRecharge";
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
          <Route path="/check" element={<Checkin/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/payment-method" element={<PaymentMethods/>} />
          <Route path="/new-upi" element={<Newupi/>} />
          <Route path="/mybank-upi" element={<Mybank/>} />
          <Route path="/paytm" element={<Paytm/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/modify" element={<Modify/>} />
          <Route path="/avataruser" element={<Avataruser/>} />
          <Route path="/update-nickname" element={<Nickname/>} />
          <Route path="/update-password" element={<Changepassword/>} />
          <Route path="/add-id" element={<AddID/>} />
          <Route path="/games/Sweeper" element={<MineSweeper/>} />
          <Route path="/learnrecharge" element={<LearnRecharge/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default Main;
