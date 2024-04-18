import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../slices/Cartslice";
function Cartpage() {
  const cart = useSelector((state) => state.Cartreducer.cart);
  const products = useSelector((state) => state.Productreducer.products);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        // border: "2px solid red",
        padding: "10px",
      }}
    >
      <h2>Shopping Cart</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <span>Home </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          marginBottom: "10px",
          justifyContent: "space-evenly",
        }}
      >
        {cart.map((items, index) => {
          return (
            <div
              style={{
                // height: "100vw",
                display: "flex",
                // border: "2px solid red",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
                // padding: "15px",
              }}
              key={index}
            >
              <span>{index + 1} items in the bag </span>
              <div></div>
              <div
                style={{
                  // border: "2px solid red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <img src={items.image} alt="" width="200px" />
                <h3>{items.title}</h3>
                <p>{items.desc}</p>
                <h2>{items.price}</h2>
                {/* <p>{items.price * items.quantity}</p> */}
              </div>
              {/* For Produt and quantity */}
              <div
                style={{
                  width: "20%",
                  height: "0%",
                  display: "flex",
                  // border: "2px solid red",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  // padding: "15px",
                }}
              >
                <h2>{items.quantity}</h2>
                <button
                  style={{
                    padding: "10px",
                    border: "none",
                    outline: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(removecart(items))}
                >
                  <ClearIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cartpage;
