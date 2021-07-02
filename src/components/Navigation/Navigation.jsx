import React, { useState } from 'react';
import { Container, Hamburguer, Menu, Nav } from './styles';

const Navigation = () => {
  const [open, isOpen] = useState(false);
  return (
    <Container>
      <Menu>
        <Nav />
        <Hamburguer>
          <span></span>
        </Hamburguer>
      </Menu>
    </Container>
  );
};

export default Navigation;
