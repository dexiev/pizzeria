import React, { useEffect, useState } from "react";
import Item from '../components/common/Item.js'
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from '../components/common/MainImage.js'
import { fetchCarts } from "../reducks/carts/operations";
import About from "../components/common/About.js";



const Home = () => {


    const selector =useSelector((state)=>state);
    const dispatch=useDispatch();
    const items=getItems(selector);


    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem("LOGIN_USER_KEY")) {
          dispatch(fetchCarts());
          console.log(items);
        }
    }, []);
  return (
    <>
    <MainImage />
    <About />
    <section class="main">
    <ul class="items">
        {items &&
        items.map((item) => (
            <li>
            <Item key={item.id} item={item} />
            </li>
        ))}
    </ul>
      </section>
    </>
  )
}

export default Home;

