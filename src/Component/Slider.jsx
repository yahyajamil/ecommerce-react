import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Link } from 'react-router-dom';

import products from '../products.json';

export default function CardSwiper() {

    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
    };

    return (
        <div className='slider'>
            <div className='slide-container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                        dynamicBullets: false,
                        clickable: true
                    }}
                    grabCursor={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={breakpoints}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/products/${product.id}`}  >
                                <div className="slide-content">
                                    <div className="card card-wrapper swiper-wrapper">
                                        <div className="card-container card swiper-slide">
                                            <div className="card-img">
                                                {product.discount === "true" && <div className="offer-text">
                                                    <span>Sale!</span>
                                                </div>}
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                            <div className="info">
                                                <span className="info-category">Running Shoes </span>
                                                <a href="/#" className="info-link"><h2 className="info-title">{product.name}</h2></a>
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
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}