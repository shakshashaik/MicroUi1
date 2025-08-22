import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import CartList from "./components/CartList";
import CartItemDetails from "./components/CartItemDetails";
import Checkout from "./components/Checkout";

export default function Page() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>🛒 Cart Page (Remote)</h2>
        <button 
          onClick={() => navigate("/")}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          ← Back to Homepage
        </button>
      </div>
      
      <Routes>
        <Route index element={<CartList />} />
        <Route path="details/:id" element={<CartItemDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
