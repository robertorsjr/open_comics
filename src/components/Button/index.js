import React from 'react';
import {Btn, TextButton} from './styles'

function Button({text, collor, bkcolor, hendleClick}) {
  return (
      <Btn bkcolor={bkcolor} onClick={()=> hendleClick()}>
        <TextButton collor={collor}>{text}</TextButton>
      </Btn>
  );
}

export default Button;