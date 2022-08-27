import React from "react";
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ChangePassword from "./pages/ChangePassword";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/forgotpassword" element={<ChangePassword/>}/>
      <Route path="/asd" element={<ProductDetails/>}/>
    </Routes> 

  )
}

export default App;
