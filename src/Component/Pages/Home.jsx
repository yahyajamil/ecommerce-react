import React, { useState, useEffect } from 'react';
import './Home.css';
import CardSwiper from '../Slider';
import Slide from '../Slide';
import Footer from '../Footer';
import WhiteBtn from '../WhiteBtn';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <>
      <section className='home'>
        <div className='header-banner'>
          <div className='header-banner-container'>
            <div className="header-banner-title">
              <h1 className={`header-banner-title-text ${showBanner ? 'show' : ''}`}>AirPro X3</h1>
            </div>
            <div className={`header-banner-img ${showBanner ? 'show' : ''}`} >
              <img src="images/sports-shoe4.png" alt="sport shoe" />
            </div>
            <div className='header-banner-button'>
              <Link to={'/shop'}><button type='button' className=''><span><i className='fa fa-long-arrow-right'></i> <span>SHOP COLLECTION</span></span></button></Link>
            </div>
          </div>
        </div>
        <div className='offer'>
          <div className="offer-container">
            <div className="heading-title">
              <h2 className='heading-title-text'>unbelievable</h2>
              <h3 className='heading-subtitle-text'>Speed. Comfort.</h3>
            </div>
            <CardSwiper />
          </div>
        </div>
        <div className='home-about'>
          <div className='home-about-container'>
            <div className='home-about-container-top'>
              <div className='home-about-image'>
                <Slide />
              </div>
              <div className='caption'>
                <div className="caption-container">
                  <h4 className='head-title'>Limited Stock Available!</h4>
                  <h2 className='title'>AirPro X2</h2>
                  <p className='text'>Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  <Link to={'/shop'}><WhiteBtn text="SHOP NOW" /></Link>
                </div>
              </div>
            </div>
            <div className='services'>
              <div className='services-container'>
                <div className="card">
                  <div className="card-conatiner">
                    <div className="card-heading">
                      <h1>01.</h1>
                    </div>
                    <div className="content">
                      <h4 className="title">Research</h4>
                      <p className='description'>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-conatiner">
                    <div className="card-heading">
                      <h1>02.</h1>
                    </div>
                    <div className="content">
                      <h4 className="title">Idea & Concept</h4>
                      <p className='description'>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-conatiner">
                    <div className="card-heading">
                      <h1>03.</h1>
                    </div>
                    <div className="content">
                      <h4 className="title">Design & Production</h4>
                      <p className='description'>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-conatiner">
                    <div className="card-heading">
                      <h1>04.</h1>
                    </div>
                    <div className="content">
                      <h4 className="title">Sales & Support</h4>
                      <p className='description'>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax">
          <div className="parallax-container">
            <h4 className="heading-title">Limited Stock Available!</h4>
            <h2 className="title">AirPro X3. Turbocharged.</h2>
            <p className="text">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. </p>
            <Link to={'/shop'}><WhiteBtn text="SHOP NOW" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
