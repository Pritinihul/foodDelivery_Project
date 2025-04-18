import React from "react";
import { useCart } from "../components/CartContext";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cartItems } = useCart();

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <>
      <Navbar />
      <div className="cartPage">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <p><strong>{item.productName}</strong></p>
                <p>₹{item.price}</p>
              </div>
            ))}

            <hr style={{ margin: '1rem 0' }} />

            <div className="cartTotal" style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
