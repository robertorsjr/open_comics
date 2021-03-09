import React from 'react';
import { Button, Separator } from '../../components'
import {
  ShowBox,
  ShowTitle,
  ShowSubTitle,
  ShowDescription
} from './styles'

function ShowLast({title, issue, subtitle, description, handleClick, location }) {
  return(
    <ShowBox >
      <ShowTitle >{title}{issue ? ` #${issue}`  : ''}</ShowTitle>  
      { subtitle ? <ShowSubTitle>{subtitle}</ShowSubTitle> : <Separator y={50}/>}
      { description ? <ShowDescription>{description} </ShowDescription> : <Separator y={50}/>}
      <Button 
        bkcolor={'#FFFFFF'} 
        color={'#0277BD'} 
        text={location === '/movies'? 'See more' : 'Read'} 
        handleClick={handleClick}/>  
    </ShowBox>
  );
}

export default ShowLast;