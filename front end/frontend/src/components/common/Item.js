import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addCart,
    increaseCart,
    decreaseCart,
} from '../../reducks/carts/operations';

import { getCarts, getSubtotal } from "../../reducks/carts/selectors";
import {push} from "connected-react-router";


const Item = ({item}) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("LOGIN_USER_KEY");



  useEffect(() => {
    if (carts != undefined && carts.length >= 0) {
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);



  const clickAddCart=()=>{
    if (key){
      dispatch(addCart(item))
    } else{
      dispatch(push("signin"))
    }
  };


  const clickPlusCart=()=>{
    dispatch(increaseCart(particularCart.id))
  };


  const clickMinusCart=()=>{
    dispatch(decreaseCart(particularCart.id))
  };

  return (
    <div>
      <section class="section2">
        <div class="images">
          <ul class="menu">
            <li class="option">
              <img src={item.image} class="item-image" alt="" />

              <div class="info">
                <div class="name">{item.name}</div>
                <div class="message">{item.message}</div>
                <div class="info-bottom">
                  <div class="price">$ {item.price}</div>

                  {particularCart && particularCart.quantity > 0 ? (
                    <div class="number">
                      <span class="minus" onClick={clickMinusCart}>
                        －
                      </span>
                      <span class="count">{particularCart.quantity}</span>
                      <span class="plus" onClick={clickPlusCart}>
                        +
                      </span>
                    </div>
                  ) : (
                    <div class="add" onClick={clickAddCart}>
                      Add +
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Item
