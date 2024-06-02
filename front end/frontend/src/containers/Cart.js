import React, { useState, useEffect } from "react";
import CartItem from "../components/common/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { getItems } from "../reducks/items/selectors";

const Cart = () => {

    const selector= useSelector((state)=>state);
    const dispatch= useDispatch();
    const carts=getCarts(selector);
    const user = getUser(selector);
    const items= getItems(selector);


    useEffect(()=>{
        dispatch(fetchItems());
        dispatch(fetchCarts());
        console.log("carts", Cart);
    },[])
  return (
    <>
      <div className="box">
        <p>Order your items</p>
      </div>
      <section className="order">
        <ul className="items">
            {
                (carts,
                    items &&
                    carts.map((cart)=>(
                        <li className="carts">
                            <CartItem
                            cart={cart.item}
                            cartId={cart.id}
                            key={cart.item.id}
                            quantity={cart.quantity}/>
                        </li>
                    ))
                )
            }
        </ul>
      </section>
    </>
  )
}

export default Cart;
