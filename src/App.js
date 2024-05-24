import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import './App.css';
import Home from './Component/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Component/Pages/LogIn';
import Regester from './Component/Pages/Regester';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import ProductDetail from './Component/Pages/ProductDetail';
import Shop from './Component/Pages/Shop';
import Cart from './Component/Pages/Cart';
import HashLoader from "react-spinners/HashLoader";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = document.querySelector(".loader-container");
    const timeout = setTimeout(() => {
      loader.classList.add("hidden");
      setLoading(false);
    }, 2000);


    return () => clearTimeout(timeout);
  }, [])

  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
        {loading ? (
          <div className="loader-container">
            <HashLoader color="#2f9ee2" />
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/register' element={<Regester />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        )}
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
