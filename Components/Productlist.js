import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, myproducts } from "../slices/Productslice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Product from "./Product";
function Productlist() {
  //   const api = `https://fakestoreapi.com/products/`;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Productreducer.products);
  const status = useSelector((state) => state.Productreducer.status);

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  // async function fetchdata() {
  //   const fetcheddata = await fetch("https://fakestoreapi.com/products/");
  //   const data = await fetcheddata.json();
  //   // console.log(data);
  //   dispatch(myproducts(data));
  // }

  if (status == "loading") {
    return (
      <Spin
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
        }}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "10px",
      }}
    >
      {products.map((produc) => {
        return (
          <div>
            <Product data={produc} key={produc.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Productlist;
