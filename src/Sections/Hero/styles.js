import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  left: ${props => (props.open ? '-220px' : '-44px')};
  width: 100%;

  .swiper {
    width: 100%;
  }
`;
