import React from 'react';
import HeadTitle from '../HeadTitle';
import Accordion from '../Accordin';
import './Contact.css';
import Footer from '../Footer';

export default function Contact() {
  return (
    <>
      <section className='contact'>
        <div className="container">
          <HeadTitle title="get in touch" subtitle="Contact Us" />
          <div className="questions">
            <div className="content">
              <h1>Quick Assist</h1>
              <div className="accordin">
                <Accordion />
              </div>
            </div>
          </div>
          <div className="info">
            <div className="queries">
              <div className="box-wrapper">
                <div className="icon">
                  <span> <i className='fa fa-credit-card'></i></span>
                </div>
                <div className="content">
                  <span>1 800 755 60 20 </span>
                  <p>Payment Queries </p>
                </div>
              </div>
              <div className="box-wrapper">
                <div className="icon">
                  <span> <i className='fa fa-truck'></i></span>
                </div>
                <div className="content">
                  <span>1 800 755 60 21</span>
                  <p>Shipping/Delivery</p>
                </div>
              </div>
              <div className="box-wrapper">
                <div className="icon">
                  <span> <i className='fa fa-life-ring'></i></span>
                </div>
                <div className="content">
                  <span>1 800 755 60 22</span>
                  <p>Other Queries</p>
                </div>
              </div>
            </div>
            <div className="info-contact">
              <div className="map">
                <iframe title='Dallas Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.88269690198!2d-96.8187938398326!3d32.77483510403053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1708179849762!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="info-content">
                <h2>Contact Details</h2>
                <div className="info-details">
                  <h4 className="title">Our Hours</h4>
                  <span>10:00 AM – 22.00 PM</span>
                  <span>Monday – Friday</span>
                </div>
                <div className="info-details">
                  <h4 className="title">Location</h4>
                  <span>
                    212 7th St SE, Dallas, TX, USA
                  </span>
                </div>
                <div className="info-details">
                  <h4 className="title">Contact Us</h4>
                  <span>Phone: 1 800 755 60 20</span>
                  <span>Email: yahyajamil3642@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
