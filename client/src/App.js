import "./App.css";
import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from './apirequests/CartContext.js';

function App() {
  const user = true;

  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
