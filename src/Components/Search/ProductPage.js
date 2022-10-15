import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "antd";
import Header from "../Header/Header";
import Product from "../ProductPage/Product";
import Data from "../../Data/Data";
import "./Search.css";
import Cartcontainer from "../Cart/Cartcontainer";
import { CartState } from "../CartContext/CartContext";

function ProductPage() {
  const [productList, setProductList] = useState(Data);

  return (
    <>
      <Header productPage={true} />
      <div
        className="product-container"
        style={{
          backgroundColor: "#eee",
        }}
      >
        <Row>
          <Col md={18}>
            <Row>
              {productList.map((product, idx) => {
                return (
                  <Col
                    key={idx}
                    sm={12}
                    sx={24}
                    md={6}
                    style={{ width: "100%" }}
                  >
                    <Product
                      product={product}
                      title={product.product}
                      category={product.category}
                      price={product.price}
                      rating={product.rating}
                      img={product.img}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={6} sx={24} style={{ width: "100%" }}>
            <Cartcontainer />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductPage;
