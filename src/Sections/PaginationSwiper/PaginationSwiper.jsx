import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

import { Bullet, Container, Swiper } from './styles';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PaginationSwiper = () => {
  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation
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
    </Container>
  );
};

export default PaginationSwiper;
