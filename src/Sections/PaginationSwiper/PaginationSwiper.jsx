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

const list = [
  {
    id: 1,
    text: 'Lorem',
    image:
      'https://toro.fiat.com.br/static/media/storiesMotor.e4b0c77e.jpg',
  },
  {
    id: 0,
    text: 'Lorem',
    image:
      'https://toro.fiat.com.br/static/media/storiesIndex.4d0958dc.jpg',
  },
];

const PaginationSwiper = () => {
  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class="${className}">
                <img src="${list[index]?.image}" alt="${list[index]?.text}" />
                </div>`;
          },
        }}
        className="mySwiper"
        navigation
      >
        {list.map(item => (
          <SwiperSlide>
            <img
              key={item.id}
              src={item.image}
              alt={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PaginationSwiper;
