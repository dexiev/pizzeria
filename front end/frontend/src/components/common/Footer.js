import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Footer = (price) => {
    let pageUrl=window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton]=useState();
    const key= localStorage.getItem("LOGIN_USER_KEY");



    useEffect(()=>{
        if (pageUrl.includes("cart")){
            setShowCheckoutButton(false)
        }
    },[]);
  return (
    <footer>
      {key != null && (
        <div class="subtotal">
          <span>Subtotal: ${price}</span>
          {showCheckoutButton ? (
            <a href="/cart">
              <button>Check your Cart</button>
            </a>
          ) : (
            <a href="/Shipping">
              <button>Checkout</button>
            </a>
          )}
        </div>
      )}
    </footer>
  )
}

export default Footer
