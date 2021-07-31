import React, { useState } from 'react';
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

      <main>
        <PaginationSwiper />
      </main>;
    </Container>
  );
};

/* <Hero />   swiper duplo */

export default Home;
