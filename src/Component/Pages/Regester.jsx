import React from 'react';
import './LogIn.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
      <section className='log-in'>
        <div className="container">
          <h2>Hi There.</h2>
          <div className="content">
            <h2 className='title'>Sign Up</h2>
            <form action="#" className='form'>
              <input type="text" placeholder='Full Name' className='name__input' />
              <input type="text" placeholder='Username' className='username__input' />
              <input type="text" placeholder='E-mail' className='email__input' />
              <input type="password" placeholder='Password' className='password__input' />
              <span className='policy__text'>By signing up, you agree to our Terms of Service and Privacy Policy.</span>
              <button type="submit" className='login__btn'>Register</button>
              <span><Link to="/log-in">Have An Account?</Link></span>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
