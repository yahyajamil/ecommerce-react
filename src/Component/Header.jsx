import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useShoppingCart } from "../Context/ShoppingCartContext";
import Dropdown from "./Dropdown";


export default function Header() {
    const [dropdown, setDropDown] = useState(false);
    const [click, setClick] = useState(false);
    const { cartQuantity } = useShoppingCart();

    const handleClick = () => {
        setClick(!click);
        document.body.classList.toggle('no-scroll');
    }

    const closeMobileMenu = () => {
        setClick(false);
        document.body.classList.remove('no-scroll');
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    }

    const location = useLocation();

    const [URL, setURL] = useState(null);

    useEffect(() => {
        setURL(location.pathname);
    }, [location])

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo-container">
                        <Link to='/'><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo-img" /></Link>
                    </div>
                    <div className="nav-container">
                        <nav className="nav">
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link
                                        to='/'
                                        className={'nav-links' + (URL === '/' ? " active" : "")}
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/shop'
                                        className={'nav-links' + (URL === '/shop' ? " active" : "")}
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        SHOP
                                    </Link>
                                </li>
                                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                    <Link
                                        to="/log-in"
                                        className='nav-links'
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        MY ACCOUNT <i className='fa fa-angle-down'></i>
                                    </Link>
                                    {dropdown && <Dropdown />}
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/about'
                                        className={'nav-links' + (URL === '/about' ? " active" : "")}
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        ABOUT
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/contact-us'
                                        className={'nav-links' + (URL === '/contact-us' ? " active" : "")}
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobile-controls">
                        <button className={click ? 'cart-sidebar mobile' : 'cart-sidebar'}>
                            <Link
                                to='/cart'
                                className='cart-link'
                                onClick={() => {
                                    closeMobileMenu();
                                }}
                            >
                                <div className="shopping-basket">
                                    <i className='fa fa-shopping-basket'></i>
                                    <span className="basket-count">{cartQuantity}</span>
                                </div>
                            </Link>
                        </button>
                        <div className='menu-icon' onClick={handleClick}>
                            <button className="btn-bar">
                                <div className={click ? 'icon-bar active' : 'icon-bar'}></div>
                                <div className={click ? 'icon-bar active' : 'icon-bar'}></div>
                                <div className={click ? 'icon-bar active' : 'icon-bar'}></div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
