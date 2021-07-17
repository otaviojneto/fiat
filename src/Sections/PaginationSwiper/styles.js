import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

import Images from  '../../mocks/images'


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
    .swiper-pagination-bullet{
      {Images.map(item => (
        background-image: url(${item.img});
        ))}
      border-radius: 8px;
      height: 112px;
      width: 112px;


      span {
          
      }
    }
  }
`;

export const Bullet = styled.div`
  display: flex;
  justify-content: center;


`;
