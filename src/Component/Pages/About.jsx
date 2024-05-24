import React from 'react';
import './About.css'
import Services from '../Services';
import WhiteBtn from '../WhiteBtn';
import Footer from '../Footer';
import HeadTitle from '../HeadTitle';

export default function About() {
  return (
    <>
      <section className='about'>
        <div className="container">
          <HeadTitle title="Know us more" subtitle="About Us"/>
          <div className="img-overlay">
            <div className="img-container">
              <h2>Helping you keep fit</h2>
              <h5>since 1987</h5>
            </div>
          </div>
          <Services />
          <div className="about-caption">
            <h5 className='sub-title'>History</h5>
            <h1 className='title'>Sed non mauris vitae erat consequat​</h1>
            <p className="description">There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <WhiteBtn text="KNOW MORE" />
          </div>
          <div className="album">
            <div className="album-1 album-content">
              <h2>SPEED</h2>
            </div>
            <div className="album-2 album-content">
              <h2>QUALITY</h2>
            </div>
            <div className="album-3 album-content">
              <h2>COMFORT</h2>
            </div>
          </div>
          <div className="about-caption pt">
            <h5 className='sub-title'>Limited Stock Available!</h5>
            <h1 className='title'>AirPro X3. Turbocharged.​</h1>
            <p className="description">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
            <WhiteBtn text="SHOP NOW" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
