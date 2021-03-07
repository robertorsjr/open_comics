import React from 'react';
import { Header, HorizonScroll, Latest} from '../../components';
import { Container } from './styles'

function HomePage() {
  return (
    <Container>
        <Header/>
        <HorizonScroll/>
        <Latest/>
    </Container>
  );
}

export default HomePage;