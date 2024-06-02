import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./containers/Cart";
import Home from "./containers/Home";
import Shipping from "./containers/Shipping";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import OrderConfirmation from "./containers/order-confirmation";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route  path={"/signup"} element={<Signup/>} />
        <Route  path={"/signin"} element={<Signin/>} />
        <Route  path={"/cart"} element={<Cart/>} />
        <Route  path={"/shipping"} element={<Shipping/>} />
        <Route  path={"/order-confirmation"} element={<OrderConfirmation/>}/>
      </Routes>
    </>
  );
};
export default Routers;