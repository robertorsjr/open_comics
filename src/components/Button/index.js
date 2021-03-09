import React from 'react';
import {Btn, TextButton} from './styles'

function Button({text, color, bkcolor, handleClick}) {
  return (
    <Btn 
      color={color}
      bkcolor={bkcolor} 
      onClick={()=> handleClick && handleClick()}
      hoverBkColor={color}
      hoverFtColor={bkcolor}
      >
      <TextButton >{text}</TextButton>
    </Btn>
  );
}

export default Button;