import React, { useState } from "react";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
import BackgroundImage from "../../assets/img/background-pc.png";




const MainImage = () => {


  const [checkUser, setCheUser] = useState(false);
  return (
    <>
      <section className='section1'>
        <img src={BackgroundImage} class="background-pc" />
        <img src='' class="background-sp" />
        <div className='main-img'>
          <h1>Pizzeria</h1>
          <p>Pizza is our superPower.</p>
        </div>
      </section>


      {checkUser && (
        <p class="img">
          <a href="/cart">
            <img src={ImageCartLogo} alt="" />
          </a>
        </p>
      )}
    </>
  )
}

export default MainImage
