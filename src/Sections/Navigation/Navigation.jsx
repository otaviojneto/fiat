import React, { useState } from 'react';
import { Container, Hamburguer, Menu, Nav } from './styles';

const Navigation = ({ OpenNav }) => {
  const [open, setIsOpen] = useState(false);
  return (
    <Container>
      
        <Nav open={open}  OpenNav={OpenNav} />

        <Hamburguer onClick={() => setIsOpen(!open)} open={open}>
          <span></span>
        </Hamburguer>
     
    </Container>
  );
};

export default Navigation;
