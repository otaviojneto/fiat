import React from 'react';
import { Hero, Navigation } from '../../Sections';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Navigation />

      <Hero />
    </Container>
  );
};

export default Home;
