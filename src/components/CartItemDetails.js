import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CartItemDetails() {
  const { id } = useParams();
  
  return (
    <div>
      <h3>Item Details</h3>
      <p>Details for Item {id}</p>
      <p>Price: $99.99</p>
      <p>Quantity: 1</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="..">← Back to Cart</Link>
      </div>
    </div>
  );
}
