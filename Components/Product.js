import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mycart, removecart } from "../slices/Cartslice";

function Product({ data }) {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.Cartreducer.cart);

  const curritem = datas.find((items) => {
    return items.id == data.id;
  });
  const currquantity = curritem ? curritem.quantity : 0;
  return (
    <>
      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <img src={data.image} alt={data.id} width="50%" />
        <h4>{data.title}</h4>
        <p>{data.price}</p>
        <p>{data.description}</p>
        <p>{data.rating.rate}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "10px",
            width: "49%",
          }}
        >
          <button
            style={{ padding: "5px", cursor: "pointer " }}
            onClick={() => dispatch(mycart(data))}
          >
            +
          </button>
          <h4>{currquantity}</h4>
          <button
            style={{ padding: "5px", cursor: "pointer " }}
            onClick={() => dispatch(removecart(data))}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
