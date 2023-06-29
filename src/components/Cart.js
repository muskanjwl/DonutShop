import React from "react";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../Context";
import { FaRupeeSign } from "react-icons/fa";
import Dessert from "./Dessert";

export default function Cart() {
  const { cart, getCartQty, getCartTotal } = useContext(cartContext);
  const [total, settotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [payload, setPayload] = useState({});
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    setCartCount(getCartQty());
    settotal(getCartTotal());
    setCheckout(false);
  }, [cart]);

  useEffect(() => {
    setPayload({
      ammount: total,
      qty: cartCount,
      items: cart,
    });
  }, [total, cartCount, cart]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h1>Cart</h1>
        <h2>{cartCount} items in cart</h2>
        <h3>
          Total Price:
          <FaRupeeSign />
          {total}
        </h3>
        <button
          className="checkout-button"
          disabled={cartCount === 0}
          onClick={() => {
            console.log(payload);
            setCheckout(true);
          }}
        >
          Checkout
        </button>
        {checkout && <h5>Check console for payload!</h5>}
      </div>
      <div>
        {cart.map((item) => (
          <Dessert key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
