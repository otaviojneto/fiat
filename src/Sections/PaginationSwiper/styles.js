import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

import Images from '../../assets/thumbMotor.jpg';

export const Container = styled.div`
  position: relative;
  left: ${props => (props.open ? '-220px' : '-44px')};
  width: 100%;
`;

export const Swiper = styled(SwiperReact)`
  width: 100%;

  .swiper-slide {
    img {
      width: 100%;
    }
  }

  .swiper-pagination {
    height: auto;
    .swiper-pagination-bullet {
      background-color: transparent;
      height: 200px;
      width: 200px;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export const Bullet = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;

  img {
    width: 100%;
  }
`;
