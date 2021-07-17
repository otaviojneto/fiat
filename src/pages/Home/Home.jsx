import React from 'react';
import {  Navigation, PaginationSwiper } from '../../Sections';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Navigation />

      <PaginationSwiper />
    </Container>
  );
};

export default Home;
