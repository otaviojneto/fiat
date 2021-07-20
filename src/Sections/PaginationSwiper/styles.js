import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

import Images from '../../assets/thumbMotor.jpg';
import theme from '../../styles/theme';

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
      height: 112px;
      position: relative;
      width: 112px;

      &::before {
        background-color: ${theme.colors.primary};
        border-radius: 0 6px 0 6px;
        color: ${theme.colors.white};
        content: '+';
        font-size: 18px;
        font-weight: 800;
        height: 40px;
        position: absolute;
        right: 4px;
        top: 4px;
        width: 40px;
      }

      img {
        border: 1px solid ${theme.colors.primary};
        border-radius: 4px;
        height: 100%;
        width: 100%;
      }

      &-active {
        img {
          border: 2px solid ${theme.colors.primary};
        }
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
