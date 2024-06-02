import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";


const Navigation = () => {


    const dispatch= useDispatch();
    const key= localStorage.getItem("LOGIN_USER_KEY");
    const [checkUser, setCheckUser]=useState();



    const signOutButton=()=>{
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push("/signin/"));
    };


    useEffect(()=>{
        if (key!=null){
            setCheckUser(true)
        }
    },[key]);



  return (
    <header>
      <section className="header-box">
        <a href="/">
            <div className="header">
                {<p className="heading1"> Pizzeria</p>}
            </div>
        </a>
        <div className="header-links">
            <p className="sign-in-links">
                {checkUser?(
                    <span className="logout" onClick={signOutButton}>
                        Logout
                    </span>
                ):(
                    <a href="/signin" className="sign-in">
                        Sign In
                    </a>
                )}
            </p>
            {checkUser && (
                <p className="img">
                    <a>
                        <img src={ImageCartLogo}>
                        </img>
                    </a>
                </p>
            )
            }
        </div>
      </section>
    </header>
  )
}

export default Navigation
