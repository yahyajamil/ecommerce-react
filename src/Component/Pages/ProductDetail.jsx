import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useShoppingCart } from '../../Context/ShoppingCartContext';
import productsData from '../../products.json';
import Footer from '../Footer';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [size, setSize] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);
  const [intendedQuantity, setIntendedQuantity] = useState(0);
  const navigate = useNavigate();
  const { getItemQuantity, setItemQuantity } = useShoppingCart();

  useEffect(() => {
    const fetchProductData = () => {
      const matchedProduct = productsData.find((p) => p.id === parseInt(id));
      if (matchedProduct) {
        setProduct(matchedProduct);
        setIntendedQuantity(getItemQuantity(matchedProduct.id));
      } else {
        console.error(`Product with ID ${id} not found.`);
      }
    };

    fetchProductData();
  }, [id, getItemQuantity]);

  useEffect(() => {
    chooseRandomProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleNextClick = () => {
    const matchedProduct = productsData.find((p) => p.id === parseInt(id));
    if (matchedProduct) {
      const index = productsData.findIndex((p) => p.id === parseInt(id));
      let nextProductId;
      if (index === productsData.length - 1) {
        nextProductId = productsData[0].id;
      } else {
        nextProductId = productsData[index + 1].id;
      }
      navigate(`/products/${nextProductId}`);
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  };

  const handlePrevClick = () => {
    const matchedProduct = productsData.find((p) => p.id === parseInt(id));
    if (matchedProduct) {
      const index = productsData.findIndex((p) => p.id === parseInt(id));
      let prevProductId;
      if (index === 0) {
        prevProductId = productsData[productsData.length - 1].id;
      } else {
        prevProductId = productsData[index - 1].id;
      }
      navigate(`/products/${prevProductId}`);
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  };

  const updateTab = (id) => {
    setActiveTab(id);
  };

  const updateSize = (size) => {
    setSize(size);
  };

  const chooseRandomProducts = () => {
    const filteredProducts = productsData.filter((p) => p.id !== parseInt(id));

    const tempRandomProducts = [];
    const productsCopy = [...filteredProducts];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * productsCopy.length);
      tempRandomProducts.push(productsCopy.splice(randomIndex, 1)[0]);
    }

    setRandomProducts(tempRandomProducts);
  };

  const increaseIntendedQuantity = () => {
    setIntendedQuantity(intendedQuantity + 1);
  };

  const decreaseIntendedQuantity = () => {
    if (intendedQuantity > 0) {
      setIntendedQuantity(intendedQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (size !== 0) {
      setItemQuantity(product.id, intendedQuantity);
    } else {
      alert('Please select a size before adding to the cart.');
    }
  };

  if (!product) return <p>Loading product data...</p>;

  return (
    <>
      <div className='product-container'>
        <div className='product-content'>
          <div className='product-detail'>
            <div className='detail-container'>
              <div className='image-container'>
                <div className='product-img'>
                  <a href={`${process.env.PUBLIC_URL}/${product.image}`}><i className='zoom fa fa-search' /></a>
                  <div className='image-wrapper'>
                    <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
                  </div>
                </div>
                <div className='product-info'>
                  <div className="sliding-btn">
                    <div className="category">
                      <span>Running Shoes</span>
                    </div>
                    <div className="btn-container">
                      <button type="button" className="nextBtn" onClick={handleNextClick}>
                        <i className='fa fa-angle-left'></i>
                      </button>
                      <button type="button" className="prevBtn" onClick={handlePrevClick}>
                        <i className='fa fa-angle-right'></i>
                      </button>
                    </div>
                  </div>
                  <h2 className='title'>{product.name}</h2>
                  <span className="price">
                    {product.discount === "true" ? (
                      <>
                        <del aria-hidden="true">
                          <span className="prev-price">
                            <bdi>
                              <span className="price-currencySymbol">$</span>
                              {product.price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="new-price">
                            <bdi>
                              <span className="price-currencySymbol">$</span>{product.newPrice}
                            </bdi>
                          </span>
                        </ins>
                      </>
                    ) : (
                      <ins>
                        <span className="new-price">
                          <bdi>
                            <span className="price-currencySymbol">$</span>{product.newPrice}
                          </bdi>
                        </span>
                      </ins>
                    )}
                    <span className='shipping'> + Free Shipping</span>
                  </span>
                  <p className='description'>
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                  </p>
                  <div className="size-btn-content">
                    <button className={size === 10 ? 'size-btn active' : 'size-btn'} onClick={() => updateSize(10)}>10</button>
                    <button className={size === 9 ? 'size-btn active' : 'size-btn'} onClick={() => updateSize(9)}>9</button>
                    <button className={size === 8 ? 'size-btn active' : 'size-btn'} onClick={() => updateSize(8)}>8</button>
                    <button className={size === 7 ? 'size-btn active' : 'size-btn'} onClick={() => updateSize(7)}>7</button>
                  </div>
                  <div className="add-to-cart">
                    <div className="count">
                      <button onClick={decreaseIntendedQuantity}>-</button>
                      <span>{intendedQuantity}</span>
                      <button onClick={increaseIntendedQuantity}>+</button>
                    </div>
                    <button
                      type="button"
                      className={(size !== 0 && intendedQuantity > 0) ? 'add-cart active' : 'add-cart'}
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="product-meta">
                    <span className="sku-wrapper">SKU:N/A</span>
                    <span className='category'>category: <span>Running Shoes</span></span>
                  </div>
                </div>
              </div>
              <div className="tab">
                <ul className="tabs-nav">
                  <li className={activeTab === 1 ? "tab-item active" : "tab-item"} onClick={() => updateTab(1)}>Description</li>
                  <li className={activeTab === 2 ? "tab-item active" : "tab-item"} onClick={() => updateTab(2)}>Additional Information</li>
                </ul>
                <div className="tabs-container">
                  <div className={activeTab === 1 ? "show-content" : "content"}>
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
                  </div>
                  <div className={activeTab === 2 ? "show-content" : "content"}>
                    <table>
                      <tbody>
                        <tr key='1'>
                          <th>Size</th>
                          <td>10,7,8,9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='related-products'>
                <h1 className='title'>Related Products</h1>
                <div className="content">
                  {randomProducts.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                      <div>
                        <div className="card-img">
                          <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
                        </div>
                        <div className="info">
                          <span className="info-category">Running Shoes </span>
                          <h2 className="info-title">{product.name}</h2>
                          <div className="star-rating"></div>
                          <span className="price">
                            {product.discount === "true" ? (
                              <>
                                <del aria-hidden="true">
                                  <span className="prev-price">
                                    <bdi>
                                      <span className="price-currencySymbol">$</span>{product.price}
                                    </bdi>
                                  </span>
                                </del>
                                <ins>
                                  <span className="new-price">
                                    <bdi>
                                      <span className="price-currencySymbol">$</span>{product.newPrice}
                                    </bdi>
                                  </span>
                                </ins>
                              </>
                            ) : (
                              <ins>
                                <span className="new-price">
                                  <bdi>
                                    <span className="price-currencySymbol">$</span>{product.newPrice}
                                  </bdi>
                                </span>
                              </ins>
                            )}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
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
