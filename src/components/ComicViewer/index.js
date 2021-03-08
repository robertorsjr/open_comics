import React from 'react';
import dayjs from 'dayjs';
import {
  ContainerViewer,
  ImgViewer,
  ContentWraper,
  AboutText,
  Container,
  ReadButton,
  VectorIcon
} from './styles'

function ComicViewer({image, date, title, issue, description}) {
  return (
      <ContainerViewer>
          <ImgViewer image={image}/>
          <ContentWraper>
            <Container>
              <AboutText collor={'#888888'} size={8}>{dayjs(date).format('DD/MM/YYYY')}</AboutText>
              <AboutText collor={'#3E4648'} size={12} weight={900}>{title} #{issue}</AboutText>
              <AboutText collor={'#555555'} size={8} weight={600}>{description}</AboutText> 
            </Container>
            <ReadButton>
              {'Read'}
              <VectorIcon/>
            </ReadButton>           
          </ContentWraper>
      </ContainerViewer>
  );
}

export default ComicViewer;