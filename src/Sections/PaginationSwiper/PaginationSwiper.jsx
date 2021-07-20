import React from 'react';
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

import thumbs from '../../mocks/images';

import { Bullet, Container, Swiper } from './styles';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PaginationSwiper = () => {
  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<div class="${className}">
                <img src="${thumbs[index]?.img}" alt="${thumbs[index]?.text}" />
                </div>`;
          },
        }}
        className="mySwiper"
        navigation
      >
        {thumbs.map(item => (
          <SwiperSlide>
            <img
              key={item.id}
              src={item.bg}
              alt={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PaginationSwiper;
