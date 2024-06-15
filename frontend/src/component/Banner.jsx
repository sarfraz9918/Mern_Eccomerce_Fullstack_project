import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import p51 from "../images/p51.jpg";
import p18 from "../images/p18.jpg";
import p21 from "../images/p21.jpeg";
import f50 from "../images/f50.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
    <div className='slider'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="imageContainer">
            <img src={p51} className='bannerSlider' alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageContainer">
            <img src={p18} className='bannerSlider' alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageContainer">
            <img src={p21} className='bannerSlider' alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imageContainer">
            <img src={f50} className='bannerSlider' alt="Slide 4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
}
