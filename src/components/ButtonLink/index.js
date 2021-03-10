import React from 'react';
import { Container, Text, VectorIcon } from './styles';

function ButtonLink({click , size, text, color, y, x, rotate, direction}) {
  return (
    <Container onClick={()=>click && click()} y={y} x={x} direction={direction}>
      <Text size={size} color={color}>{text}</Text>
      <VectorIcon  y={size} x={size} rotate={rotate}/>
    </Container>   
  );
}

export default ButtonLink;