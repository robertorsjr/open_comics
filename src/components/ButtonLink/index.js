import React from 'react';
import { Container, Text, VectorIcon } from './styles';

function ButtonLink({click , size, text, color, y, x}) {
  return (
    <Container onClick={()=>click && click()} y={y} x={x}>
      <Text size={size} color={color}>{text}</Text>
      <VectorIcon  y={size} x={size}/>
    </Container>   
  );
}

export default ButtonLink;