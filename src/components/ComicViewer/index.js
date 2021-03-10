import React from 'react';
import dayjs from 'dayjs';
import { ButtonLink } from '../../components'
import {
  ContainerViewer,
  ImgViewer,
  ContentWraper,
  AboutText,
  Container,
} from './styles'

function ComicViewer({image, date, title, issue, description}) {
  return (
    <ContainerViewer>
      <ImgViewer image={image}/>
      <ContentWraper>
        <Container>
          {date && <AboutText collor={'#888888'} size={8}>{dayjs(date).format('DD/MM/YYYY')}</AboutText>}
          <AboutText collor={'#3E4648'} size={12} weight={900}>{title} #{issue}</AboutText>
          <AboutText collor={'#555555'} size={8} weight={600}>{description}</AboutText> 
        </Container>
        <ButtonLink
          x={14}
          y={33}
          text={'Read'}
          size={8}
          color={'#0277BD'}
        />           
      </ContentWraper>
    </ContainerViewer>
  );
}

export default ComicViewer;