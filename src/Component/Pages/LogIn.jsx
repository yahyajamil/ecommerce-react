import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import Footer from '../Footer';

export default function LogIn() {
  return (
    <>
      <section className='log-in'>
        <div className="container">
          <h2>Welcome Back.</h2>
          <div className="content">
            <h2 className='title'>Login</h2>
            <form action="#" className='form'>
              <input type="text" placeholder='Username, OR E-mail' className='username__input' />
              <input type="password" placeholder='Password' className='password__input' />
              <div>
              <input type="checkbox" value='remember' id='remember' name='remember'/><label htmlFor='remember'>Remember Me</label>
              </div>
              <button type="submit" className='login__btn'>Login</button>
              <span><a href="/#">Forgot Password?</a></span>
              <span><Link to="/register">Don't Have An Account?</Link></span>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
