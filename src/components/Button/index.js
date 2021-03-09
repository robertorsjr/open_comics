import React from 'react';
import {Btn, TextButton} from './styles'

function Button({text, color, bkcolor, handleClick}) {
  return (
    <Btn bkcolor={bkcolor} onClick={()=> handleClick && handleClick()}>
      <TextButton color={color}>{text}</TextButton>
    </Btn>
  );
}

export default Button;