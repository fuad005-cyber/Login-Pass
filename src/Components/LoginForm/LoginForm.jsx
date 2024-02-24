import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Az Cake</h1>
        <div className="input-box">
            <input name='login' type="text" placeholder='İstifadəçi email' required maxLength={35} />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input name='password' type="password" placeholder='Şifrə' required  maxLength={30}/>
            <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox" />Yadda saxla</label>
            <a href="#">Şifrəni unutmusunuz?</a>
        </div>
        <button type='submit'>Daxil ol</button>
        <div className="register-link">
            <p>Hesabınız yoxdur?</p>
            <a href="#">Qeydiyyatdan keçin</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
