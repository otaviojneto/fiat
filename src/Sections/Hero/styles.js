import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

import Img from '../../assets/thumbToro.jpg';


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
`;

export const Bullet = styled.div`
  display: flex;
  justify-content: center;

  span{
    background-image: url(${Img});
    height: 200px;
    width: 200px;
  }

`;
