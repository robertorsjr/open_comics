import React from 'react';
import Button from '../Button'
import {
  ShowBox,
  ShowTitle,
  ShowSubTitle,
  ShowDescription
} from './styles'

function ShowLast({title, issue, subtitle, description, handleClick }) {
  return(
    <ShowBox >
      <ShowTitle >{title}{issue ? ` #${issue}`  : ''}</ShowTitle>  
      { subtitle && <ShowSubTitle>{subtitle}</ShowSubTitle> }
      { description && <ShowDescription>{description} </ShowDescription> }
      <Button bkcolor={'#FFFFFF'} color={'#0277BD'} text={'Read'} handleClick={handleClick}/>  
    </ShowBox>
  );
}

export default ShowLast;