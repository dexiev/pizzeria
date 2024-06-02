import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import "./assets/style.css";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import { getUser } from "./reducks/users/selectors";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { getSubtotal } from "./reducks/carts/selectors";
import { BrowserRouter } from "react-router-dom";

let pageUrl = window.location.toString();

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    if (
      pageUrl.includes("Shipping") ||
      pageUrl.includes("order-confirmation")
    ) {
      setShowFooter(false);
    }
    dispatch(fetchUserFromLocalStorage());
  }, []);
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Router />
      {showFooter && <Footer price={subtotal} />}
    </BrowserRouter>
      
    </>
  );
}

export default App;