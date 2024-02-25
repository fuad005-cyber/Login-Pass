import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const LoginForm = () => {

    const [action, setAction] = useState("Login")

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Az Cake</h1>
        <div className="input-box">
            <input name='login' type="text" placeholder='İstifadəçi email' required maxLength={35} />
            <MdEmail className='icon'/>
        </div>
        {action === 'Sign up'?<div><div className="input-box">
            <input name='password' type="text" placeholder='Ad və Soyadı' required  maxLength={30}/>
            <FaUser className='icon'/>
        </div></div>:<div></div>}
        <div className="input-box">
            <input name='password' type="password" placeholder='Şifrə' required  maxLength={30}/>
            <FaLock className='icon'/>
        </div>
        
        <div className="remember-forgot">
        {action ==='Sign up'?<div></div>: <label><input type="checkbox" />Yadda saxla</label>}
        {action ==='Sign up'?<div></div>: <a href="#">Şifrəni unutmusunuz?</a>}
            
        </div>
       
        {action ==='Login'? <button type='submit'>Daxil ol</button>:<button type='submit' onClick={()=>{setAction("Login")}}>Qeydiyyatdan keç</button>}
        <div className="register-link">
            {action ==='Login'?<p>Hesabınız yoxdur?</p>:<div></div>}
            {action ==='Sign up'?<div></div>:<a href="#" onClick={()=>{setAction("Sign up")}}>Qeydiyyatdan keçin</a>}
        </div>
      </form>
    </div>
  )
}

export default LoginForm
