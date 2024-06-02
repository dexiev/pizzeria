import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
const OrderConfirmation= () => {
    const selector=useSelector((state)=>state);
    const user=JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
    useEffect(()=>{
        console.log(user)
    },[])
  return (
    <div>
      <div className='message'>
        <p>
           Thank you for your ordering{" "}
           <span className='color'>{user.user_name} </span>. We have received your request.{""}
           <br></br>
           Our staff will be contacting you to tell the next steps
        </p>
      </div>

      <div className='backhome'>
        <a href='/'>
            <button>Back to Home</button>
        </a>
      </div>
    </div>
  )
}

export default OrderConfirmation
