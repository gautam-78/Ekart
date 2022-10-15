import React from "react";
import Header from "../Header/Header";
import { Row, Col } from "antd";
import Checkout from "./Checkout";
import Cartcard from "../Cart/Cartcard";
import { CartState } from "../CartContext/CartContext";
import Totalprice from "../Cart/Totalprice";

function CheckoutPage() {
  const { addToCart } = CartState();
  const totalNoOfProducts = addToCart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  const TotalPrice = addToCart.reduce((acc, item) => {
    return acc + Number(item.price.slice(1)) * item.qty;
  }, 0);
  return (
    <div>
      <Header />
      <Row>
        <Col md={18}>
          <Checkout />
        </Col>
        <Col md={6} sx={24} style={{ width: "100%", backgroundColor: "#eee" }}>
          {addToCart.map((product, idx) => {
            return (
              <Cartcard
                key={idx}
                id={product.id}
                qty={product.qty}
                img={product.img}
                name={product.product}
                price={product.price}
                category={product.category}
              />
            );
          })}
          <Totalprice
            totalNoOfProducts={totalNoOfProducts}
            TotalPrice={TotalPrice}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutPage;
