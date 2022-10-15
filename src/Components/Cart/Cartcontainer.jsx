import React, { useEffect, useState } from "react";
import Cartcard from "./Cartcard";
import Totalprice from "./Totalprice";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CartState } from "../CartContext/CartContext";

function Cartcontainer() {
  const navigate = useNavigate();
  const { addToCart, setAddToCart } = CartState();
  const [value, setValue] = useState(1);

  useEffect(() => {
    setAddToCart(addToCart);
  }, [value]);
  // ? show the NO of Products Ends

  // TODO Calculate the total products available in cart container with help of reduce function

  // Total no of products ends
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {addToCart.length == 0 && (
        <p style={{ textAlign: "center", fontSize: "1.2rem", margin: "auto" }}>
          Add an item to cart and it will show up here
        </p>
      )}

      {addToCart.map((product, idx) => {
        return (
          <Cartcard
            key={idx}
            qty={product.qty}
            productId={product.id}
            img={product.img}
            name={product.product}
            price={product.price}
            category={product.category}
          />
        );
      })}
      <Totalprice />

      {addToCart.length !== 0 && (
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            style={{
              fontWeight: "bold",
              backgroundColor: "orange",
              border: "none",
            }}
            size="large"
            icon={<ShoppingCartOutlined />}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cartcontainer;
