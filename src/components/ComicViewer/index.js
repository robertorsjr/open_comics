import React from 'react';
import {
  ContainerViewer,
  ImgViewer,
  ContentWraper,
  AboutText,
  Container,
  ReadButton
} from './styles'

function ComicViewer({image, date, title, issue, description}) {
  return (
      <ContainerViewer>
          <ImgViewer image={image}/>
          <ContentWraper>
            <Container>
              <AboutText collor={'#888888'} size={8}>{date}</AboutText>
              <AboutText collor={'#3E4648'} size={12} weight={900}>{title} #{issue}</AboutText>
              <AboutText collor={'#555555'} size={8} weight={600}>{description}</AboutText> 
            </Container>
            <ReadButton>{'Read >'}</ReadButton>           
          </ContentWraper>
      </ContainerViewer>
  );
}

export default ComicViewer;