import React, { useState } from 'react';
import { Container, Hamburguer, Menu, Nav } from './styles';

const Navigation = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <Container>
      <Menu>
      
        <Nav open={open}  />
      
        <Hamburguer onClick={() => setIsOpen(!open) }>
          <span></span>
        </Hamburguer>
      </Menu>
    </Container>
  );
};

export default Navigation;
