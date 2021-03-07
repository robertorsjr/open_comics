import React from 'react';
import Button from '../Button'
import {
  ShowBox,
  ShowTitle,
  ShowSubTitle,
  ShowDescription
} from './styles'

function ShowLast({title, issue, subtitle, description, hendleClick }) {
  return(
    <ShowBox >
      {
        issue ? <ShowTitle >{title} #{ issue}</ShowTitle>
        : <ShowTitle>{title}</ShowTitle>
      }
      <ShowSubTitle>{subtitle && subtitle}</ShowSubTitle>
      <ShowDescription>{description && description} </ShowDescription>
      <Button bkcolor={'#FFFFFF'} collor={'#0277BD'} text={'Read'} hendleClick={hendleClick}/>  
    </ShowBox>
  );
}

export default ShowLast;