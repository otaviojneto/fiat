import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

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
        align-items: center;
        background-color: ${theme.colors.primary};
        border-radius: 0 8px 0 8px;
        content: '+';
        color: ${theme.colors.white};
        display: flex;
        font-size: 22px;
        justify-content: center;
        height: 30px;
        position: absolute;
        right: 4px;
        top: 4px;
        width: 30px;
      }

      img {
        border: 1px solid ${theme.colors.primary};
        border-radius: 4px;
        height: 100%;
        width: 100%;
      }

      &-active {
        transition: ease-in-out 0.4s;
        img {
          border: 2px solid ${theme.colors.primary};
        }

        &::before {
          display: none;
        }
      }
    }
  }
`;

export const Image = styled.img`
height: 74px;
position: absolute;
right: 36%; 
top: 8%;

`;

export const Text = styled.div`
  height: 250px;
  left: 10%;
  position: absolute;
  top: 22%;
  width: 230px;
  
  h2 {
    color: ${theme.colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 0px;
  }

  h1 {
    color: ${theme.colors.white};
    font-family: 'FuturaPT Bold', sans-serif;
     font-weight: 700;
    font-size: 80px;
  }
`;
