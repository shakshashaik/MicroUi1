import React, { use } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function CartList() {
  const navigate=useNavigate();
  return (
    <div>
      <h3>Cart Items</h3>
      <ul>
        <li>
          Item 1 - <button onClick={()=>navigate("details/1")}>View Details</button>
          {/* Item 1 - <Link to="details/1">View Details</Link> */}
        </li>
        <li>
          Item 2 - <Link to="details/2">View Details</Link>
        </li>
        <li>
          Item 3 - <Link to="details/3">View Details</Link>
        </li>
      </ul>
      <div style={{ marginTop: '20px' }}>
        <Link to="checkout">Proceed to Checkout</Link>
      </div>
    </div>
  );
}
