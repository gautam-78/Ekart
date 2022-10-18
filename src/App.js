import "./App.css";
import Home from "./Components/HomePage/Home";
import Register from "./Components/RegisterPage/Register";
import Login from "./Components/LoginPage/Login";
import "antd/dist/antd.css";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Thanks from "./Components/Thanks/Thanks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./Components/Search/ProductPage";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={<ProductPage isLoggedIn={isLoggedIn} />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="ordered" element={<Thanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
