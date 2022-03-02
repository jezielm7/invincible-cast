import React from 'react';

import Input from '../../components/Input';
import Card from '../../components/Card';

import coverImg from '../../assets/images/cover.png';
import background from '../../assets/images/background.png';

import { Container, Header, Content, ImageView } from './styles';

function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar" />
      </Header>

      <Content>
        <ImageView
          source={background}
          blurRadius={12}
        >
          <Card />
        </ImageView>
      </Content>
    </Container>
  );
};

export default Home;
