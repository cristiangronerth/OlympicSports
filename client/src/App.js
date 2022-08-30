import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ChangePassword from "./pages/ChangePassword";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Shirts from "./pages/Shirts";
import Shorts from "./pages/Shorts";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Accesories from "./pages/Accesories";
import SearchProducts from "./pages/SearchProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgotpassword" element={<ChangePassword />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/accesories" element={<Accesories />} />
      <Route path="/search" element={<SearchProducts />} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );

}

export default App;
