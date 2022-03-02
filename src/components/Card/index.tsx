import React from 'react';

import omniImg from '../../assets/images/omni-man.png';

import { Container, Image, Title, BirthPlace } from './styles';

function Card() {
  return (
    <Container
      animation="zoomIn"
    >
      <Image
        source={omniImg}
        resizeMode="contain"
        animation="swing"
        delay={1000}
      />

      <Title>Omni Man</Title>
      <BirthPlace>Viltrum 🌎</BirthPlace>
    </Container>
  );
};

export default Card;
