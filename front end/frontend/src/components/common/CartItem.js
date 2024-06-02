import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import {
    addCart,
    increaseCart,
    decreaseCart,
} from "../../reducks/carts/operations";

import { getCarts, getSubtotal } from "../../reducks/carts/selectors";


const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector((state)=> state);
    const dispatch = useDispatch();
    const carts= getCarts(selector);
    const subtotal= getSubtotal(selector);
    console.log("cart", cart);

    const clickPlusCart=()=>{
        dispatch(increaseCart(cartId))
    };

    const clickMinusCart=()=>{
        dispatch(decreaseCart(cartId))
    };

    useEffect(()=>{
        console.log(cart.image);
        console.log(cart);
        console.log(carts);

    },[])
  return (
    <>
      <div>
        <img src={""+cart.image}
        className='item-image'>
        </img>
      </div>

      <div className='info'>
        <div className='name'>{cart.image}</div>
        <div className='message'>{cart.message}</div>
        <div className='info-bottom'>
            <div className='price'>${cart.price}</div>
            <div className='number'>
                <span className='minus' onClick={clickPlusCart}>-</span>
                <span className='count'>{quantity}</span>
                <span className='plus' onClick={clickPlusCart}>+</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
