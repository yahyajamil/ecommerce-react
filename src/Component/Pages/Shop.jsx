import React, { useState } from 'react';
import './Shop.css';
import products from '../../products.json';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function Shop() {
  const [sideBar, setSideBar] = useState(false);
  const [price, setPrice] = useState(50);

  const handlePriceChange = (event) => {
    setPrice(parseInt(event.target.value));
  };

  const sideBarToggler = () => {
    setSideBar(true);
  };

  return (
    <>
      <div className='shop-container'>
        <div className={sideBar ? 'side-bar active' : 'side-bar'}>
          <div className='close-btn'>
            <button onClick={() => { setSideBar(false) }}><span><i className='fa fa-close'></i></span></button>
          </div>
          <div className='search-container'>
            <h1 className='title'>Search Products</h1>
            <div className="search-input-container">
              <input type="text" placeholder='Search Products...' />
              <button type="button"><i className='fa fa-search'></i></button>
            </div>
          </div>
          <div className='search-container'>
            <h1 className='title'>Search Catgories</h1>
            <div className="category">
              <Link to="/shop" onClick={() => { setSideBar(false) }}><span>Running Shoes</span></Link>
              <p>({products.length})</p>
            </div>
          </div>
          <div className='search-container'>
            <h1 className='title'>Price Filter</h1>
            <div className="price-filter">
              <input
                type="range"
                id="price"
                name="price"
                min="50"
                max="70"
                value={price}
                onChange={handlePriceChange}
              />
              <output htmlFor="price">{price}$</output>
            </div>

            <button type="button" className='filter-btn'>Filter</button>
          </div>
        </div>

        {sideBar && <div className="overlay" onClick={sideBarToggler}></div>}

        <div className="shop-content">
          <div className="filter">
            <div className="filter-btn-container">
              <button type="button" className='filter-btn' onClick={sideBarToggler}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
                  </svg>
                </span>FILTER</button>
            </div>
          </div>

          <div className='products-container'>
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} >
                <div className="card card-wrapper" key={product.id}>
                  <div className="">
                    <div className="card-img">
                      {product.discount === "true" && <div className="offer-text">
                        <span>Sale!</span>
                      </div>}
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="info">
                      <span className="info-category">Running Shoes </span>
                      <h2 className="info-title">{product.name}</h2>
                      <div className="star-rating"></div>
                      <span className="price">
                        {product.discount === "true" ? <><del aria-hidden="true">
                          <span className="prev-price">
                            <bdi>
                              <span className="price-currencySymbol">$</span>
                              {product.price}
                            </bdi>
                          </span>
                        </del><ins><span className="new-price"><bdi><span className="price-currencySymbol">$</span>{product.newPrice}</bdi></span></ins></> : <ins><span className="new-price"><bdi><span className="price-currencySymbol">$</span>{product.discount ? product.price : product.newPrice}</bdi></span></ins>}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
