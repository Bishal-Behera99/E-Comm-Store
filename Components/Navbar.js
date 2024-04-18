import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Navbar() {
  const cart = useSelector((state) => state.Cartreducer.cart);

  let count = 0;
  cart.forEach((element) => {
    count += element.quantity;
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "flex-end",
        }}
      >
        <h2>E-STORE</h2>
      </div>

      <div style={{ display: "flex", paddingRight: "10px" }}>
        <NavLink to="/cart-item">
          <ShoppingCartIcon />
        </NavLink>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Navbar;
