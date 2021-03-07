import React from 'react';
import dayjs from 'dayjs'
import { 
  Container,
  BackImage,
  Opacity,
  Wrapper,
  Relesed,
  Title,
  Description,
  About
 } from './styles';

function CartazMovie({ item }) {
  return (
    <Container>
      <BackImage image={item.image.medium_url && item.image.medium_url}/>
      <Opacity/>
      <Wrapper>
        <About>
          {
            item.release_date &&  
              <Relesed>Relase date:{dayjs(item.release_date).format('DD/MM/YYYY')}</Relesed>
          }
        </About> 
        <About>
          <Title>{item.name}</Title>
          <Description>{item.deck}</Description>
        </About>
      </Wrapper>
    </Container>
  );
}

export default CartazMovie;