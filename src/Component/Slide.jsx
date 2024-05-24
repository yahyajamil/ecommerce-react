import { Swiper, SwiperSlide } from 'swiper/react';

import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import products from '../products.json';

export default function CardSwiper() {

    return (
        <div className='slide'>
            <div className='slide-content'>
                <Swiper
                    modules={[ Scrollbar, A11y, Autoplay]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    grabCursor={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {products.map((profile) => (
                        <SwiperSlide key={profile.id}>
                            <div className="slide-content">
                                <div className="card card-wrapper swiper-wrapper">
                                    <div className="card-container card swiper-slide">
                                        <div className="slide-img">
                                            <img src={profile.image__png} alt={profile.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}