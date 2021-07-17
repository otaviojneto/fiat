import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

import { Container } from './styles';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
]);

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide>
          <img
            src="https://toro.fiat.com.br/static/media/storiesIndex.4d0958dc.jpg"
            alt="car"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://toro.fiat.com.br/static/media/storiesMotor.e4b0c77e.jpg"
            alt="car"
          />

        </SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={2}
        freeMode
        watchSlidesVisibility
        watchSlidesProgress
      >
        <SwiperSlide>
          <img
            src="https://toro.fiat.com.br/static/media/storiesIndex.4d0958dc.jpg"
            alt="car"
          />
        </SwiperSlide>
        <SwiperSlide> <img
            src="https://toro.fiat.com.br/static/media/storiesIndex.4d0958dc.jpg"
            alt="car"
          /></SwiperSlide>
        <SwiperSlide> <img
            src="https://toro.fiat.com.br/static/media/storiesIndex.4d0958dc.jpg"
            alt="car"
          /></SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Hero;
