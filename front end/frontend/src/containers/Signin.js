import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from './Home';
import { push } from "connected-react-router";
import { useState } from 'react';

const Signin = () => {
    const dispatch= useDispatch();
    const closeButton=()=>{
        dispatch(push("/"))
    };


    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

    const inputEmail = (event) => {
       setEmail(event.target.value);
    };


    const inputPassword = (event) => {
        setPassword(event.target.value);
    };


    const signInButton=()=>{
        dispatch(signIn(email, password));
        setEmail("");
        setPassword("");
    }


  return (
    <>
       <Home />
      <section class="popup">
        <div class="popup-inner">
          <span onClick={closeButton}></span>
          <div class="input">
            <br />
            <br />
            <br />
            <p class="bold">Dinno's Pizzeria</p>
            <p class="bold2">SIGN-IN</p>
            <input
              type="email"
              onChange={inputEmail}
              required
              placeholder="Email address"
              value={email}
            />{" "}
            <br />
            <input
              type="password"
              onChange={inputPassword}
              required
              placeholder="Password"
              value={password}
            />
          </div>

          <button class="button" onClick={signInButton}>
            SIGN IN
          </button>
          <p class="bottom">
            New Customer?{" "}
            <a href="/signup">
              <u>Register</u>
            </a>{" "}
          </p>
        </div>
      </section>
    </>
  )
}

export default Signin;
