import React, { useState } from 'react';
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import productsData from '../../products.json';
import './Cart.css';
import Footer from '../Footer';

export default function Cart() {
  const [coupon, setCoupon] = useState(false);

  const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart, clearCart } = useShoppingCart();

  const getProduct = (id) => productsData.find(p => p.id === id);

  function calculateTotalPrice() {
    return cartItems.reduce((total, item) =>
      total + (getProduct(item.id).price * item.quantity), 0
    );
  }

  function couponToggler() {
    setCoupon(!coupon);
  }


  if (cartItems.length === 0) {
    return (
      <>
        <div className='product-container'>
          <div className='product-content'>
            <div className='product-detail'>
              <div className="detail-container">
                <h1 className='cart-title'>Cart</h1>
                <div className="cart-content">
                  <div className="cart">
                    <div className='empty-cart-message'>
                      <h3>Your cart is feeling a bit lonely!</h3>
                      <p>Add some products to keep it company.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className='product-container'>
        <div className='product-content'>
          <div className='product-detail'>
            <div className="detail-container">
              <h1 className='cart-title'>Cart</h1>
              <div className="cart">
                <div className="cart-container">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name thead"><div>Product</div></th>
                        <th className="product-price thead"><div>Price</div></th>
                        <th className="product-quantity thead"><div>Quantity</div></th>
                        <th className="product-subtotal thead"><div>Subtotal</div></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        const product = getProduct(item.id);
                        return (
                          <tr key={item.id}>
                            <td>
                              <div className="cart-product-info">
                                <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" className='cart-img' />
                                <div className="cart-product-title">
                                  <p>{product.name}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                {product.discount ? <p>${product.newPrice}</p> : <p>${product.price}</p>}
                              </div>
                            </td>
                            <td>
                              <div className="count">
                                <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                              </div>
                            </td>
                            <td>
                              <div>
                                {product.discount ? <p>${(product.newPrice * item.quantity).toFixed(2)}</p> : <p>${(product.price * item.quantity).toFixed(2)}</p>}
                              </div>
                            </td>
                            <td>
                              <div>
                                <button className='remove-btn' onClick={() => removeFromCart(item.id)}><span><i className='fa fa-close'></i></span></button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className='total'>
                  <table>
                    <thead>
                      <tr>
                        <th className=""><div>Total</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className='total-price'>Total: ${calculateTotalPrice().toFixed(2)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td><div className='line'></div></td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <button className='coupon' onClick={couponToggler}><span>Have a Coupon?</span></button>
                            <div className={coupon ? 'coupon-box' : 'coupon-box hidden'}>
                              <input type="text" className='coupon-input' placeholder='Enter  your coupon code' />
                              <button className='coupon-btn'>Submit</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><div className='line'></div></td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <button className='checkout' onClick={clearCart}><span>PROCEED TO CHECKOUT</span></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
