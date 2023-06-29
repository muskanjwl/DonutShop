import React from "react";
import { useContext } from "react";
import { cartContext } from "../Context";
import "./styles.css";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Dessert({ item }) {
  const { cart, addToCart, incrementQty, decrementQty, removeFromCart } =
    useContext(cartContext);

  return (
    <div className="product-card">
      <div className="product-desc">
        <img
          src={item?.image}
          alt={item?.name}
          style={{ width: "230px", height: "250px" }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px 0px ",
          }}
        >
          <div
            style={{
              padding: "0 5px",
              color: "#A62A6C",
              fontWeight: "bold",
              fontSize: "19px",
              fontFamily: "MuseoModerno",
            }}
          >
            <div>{item?.name}</div>
            <div>
              <FaRupeeSign />
              {item?.price}
            </div>
          </div>
          <div>{item?.description}</div>
          {cart?.find((des) => des.id === item.id) ? (
            <div className="modify-item">
              <div className="item-qty">
                <button
                  className="dec"
                  onClick={() => {
                    decrementQty(item);
                  }}
                >
                  -
                </button>
                <div className="qty-count">
                  {cart.find((des) => des.id === item.id).qty} pcs
                </div>
                <button
                  className="inc"
                  onClick={() => {
                    incrementQty(item);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                <MdDelete fontSize={"35px"} />
              </button>
            </div>
          ) : (
            <button
              className="add-button"
              onClick={() => {
                addToCart(item);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
