import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="col">
                    <h2 className='title'>Categories</h2>
                    <ul className="menu-categories">
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Running Shoes</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Yoga Shoes</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Sport Shoes</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Casual Shoes</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className='title'>Business</h2>
                    <ul className="menu-categories">
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Company Profile</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Social Responsibility</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Brand Kit</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Media</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className='title'>About</h2>
                    <ul className="menu-categories">
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Broad Of Directors</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Company Profile</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Career</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Number Speak</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className='title'>Useful Links</h2>
                    <ul className="menu-categories">
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Return Policies</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Announcement</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Have issue?</a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link">Media Kit</a>
                        </li>
                    </ul>
                </div>
                <div className="col col__5">
                    <h2 className='title'>Follow US</h2>
                    <ul className="menu-categories">
                        <li className="menu-item">
                            <a href="/#" className="menu-link"><i className='fa fa-instagram'></i></a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link"><i className='fa fa-facebook'></i></a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link"><i className='fa fa-linkedin'></i></a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link"><i className='fa fa-github'></i></a>
                        </li>
                        <li className="menu-item">
                            <a href="/#" className="menu-link"><i className='fa fa-youtube-play'></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <div>
                    <span>Copyright © 2024 All Right Reversed.</span>
                </div>
                <div>
                    <span>Developed By <a href="/#">Yahya Jamil</a></span>
                </div>
            </div>
        </footer>
    )
}
