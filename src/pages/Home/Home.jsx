import React from 'react';
import {
  Hero,
  Navigation,
  PaginationSwiper,
} from '../../Sections';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Navigation />
      {/* <Hero /> */}
      <PaginationSwiper />
    </Container>
  );
};

export default Home;
