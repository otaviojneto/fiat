import styled from 'styled-components';

export const Container = styled.div`
  background-color: yellow;
`;

export const Menu = styled.div`
display: flex;
`;

export const Nav = styled.div`
background-color: red;
display: none;
height: 100vh;
width: 220px;



`;

export const Hamburguer = styled.button`
  background-color: black;
  display: flex;
  height: 44px;
  position: relative;
  width: 44px;

  span {
    content: '';
    background-color: white;
    border-radius: 12px;
    bottom: 12px;
    height: 2px;
    left: 12px;
    position: absolute;
    width: 20px;

    &::before {
      content: '';
      background-color: white;
      border-radius: 12px;
      bottom: 8px;
      height: 2px;
      left: 0;
      position: absolute;
      width: 20px;
    }

    &::after {
      content: '';
      background-color: white;
      border-radius: 12px;
      bottom: 16px;
      height: 2px;
      left: 0;
      position: absolute;
      width: 20px;
    }
  }
`;

