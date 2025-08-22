import React from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div>
      <h3>Checkout</h3>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button type="button">Complete Purchase</button>
        </div>
      </form>
      <div style={{ marginTop: '20px' }}>
        <Link to="..">← Back to Cart</Link>
      </div>
    </div>
  );
}
