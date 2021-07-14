import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
`;

export const Menu = styled.div`
  display: flex;
`;

export const Nav = styled.div`
  background-color: black;
  height: 100vh;
  transition: ease-in-out 0.4s;
  width: ${props => (props.open ? '220px' : 0)}; ;
`;

export const Hamburguer = styled.button`
  background-color: black;
  display: flex;
  height: 44px;
  right: ${props => (props.open ? '24px' : '2px')};
  top: 10px;
  position: relative;
  width: 44px;
  z-index: 2;

  span {
    content: '';
    background-color: ${theme.colors.primary};
    border-radius: 12px;
    bottom: ${props => (props.open ? '22px' : '12px')};
    height: 2px;
    left: ${props => (props.open ? '10px' : '12px')};
    position: absolute;
    transition: ease-in-out 0.2s;
    transform: ${props =>
      props.open
        ? 'translate(0%, 175%) rotate(-45deg)'
        : 'none'};
    width: 20px;

    &::before {
      content: '';
      background-color: ${theme.colors.primary};
      border-radius: 12px;
      bottom: 8px;
      height: ${props => (props.open ? 'none' : '2px')};
      left: 0;
      position: absolute;
      width: 20px;
    }

    &::after {
      content: '';
      background-color: ${theme.colors.primary};
      border-radius: 12px;
      bottom: ${props => (props.open ? '0' : '16px')};
      height: 2px;
      left: ${props => (props.open ? '6px' : '0')};
      position: absolute;
       transition: ease-in-out 0.2s;
      transform: ${props =>
        props.open
          ? 'translate(-27%, 0%) rotate(-90deg)'
          : 'none'};
      width: 20px;
    }
  }
`;

// #openmenu:checked ~ .menu-pane {
//   left: -5vw;
//   transform: translateX(-5vw);
// }

// #openmenu:checked ~ .hamburger-icon span:nth-of-type(2) {
//   transform: translate(0%, 175%) rotate(-45deg);
//   background-color: white;
// }

// #openmenu:checked ~ .hamburger-icon span:nth-of-type(3) {
//   transform: rotate(45deg);
//   background-color: white;
// }

// #openmenu:checked ~ .hamburger-icon span:nth-of-type(1) {
//   opacity: 0;
// }
