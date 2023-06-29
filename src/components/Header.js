import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaShoppingCart } from "react-icons/fa";
import { GiDonut } from "react-icons/gi";
import { cartContext } from "../Context";

export default function Header() {
  const { getCartQty } = useContext(cartContext);

  return (
    <div className="header-container">
      <img src={"/assets/logo.png"} alt="logo" className="logo" />
      <ul>
        <li>
          <Link to="/">
            <div className="icon-wrapper">
              <GiDonut color="#EDBBBA" fontSize={"45px"} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="icon-wrapper cart-icon">
              <FaShoppingCart color="#EDBBBA" fontSize={"40px"} />
              <div className="cart-qty">{getCartQty()}</div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
