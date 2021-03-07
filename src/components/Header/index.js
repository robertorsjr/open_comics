import React, { useEffect } from 'react';
import Search from '../../components/Search';
import ShowLast from '../../components/ShowLast'
import Menu from '../../components/Menu';
import Separator from '../../components/Separator'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Row,
  TitleBox,
  Title,
  BackImage,
  Wrapper,
  Opacity
} from './styles'

function Header({ items, hendleClick}) {

  let location = useLocation();

  useEffect(()=>[location])

  return (
    <>
      { 
        items.results && items.results.map((item, index) =>
          <Container key={index}>
            <BackImage image={item.image.original_url}/>
            <Opacity/>
            <Wrapper>
              <Row >
                <TitleBox>
                  <Title>OPENCOMICS</Title>
                </TitleBox>
                <Menu/>
                <Separator x={39}/>
                <Search/>
              </Row>
              {
                location.pathname === '/' &&  
                <ShowLast 
                  hendleClick={hendleClick}
                  title={item.volume.name }
                  issue={item.issue_number}
                  subtitle={item.name}
                  description={item.description}
                />
              }
              {
                location.pathname === '/newcomics' && 
                <ShowLast 
                  hendleClick={hendleClick}
                  title={item.volume.name }
                  issue={item.issue_number}
                  subtitle={item.name}
                  description={item.description}
                />
              }
              {
                location.pathname === '/movies' &&
                <ShowLast 
                  hendleClick={hendleClick}
                  title={item.name }
                  subtitle={item.deck}
                  description={item.description}
                /> 
              }         
            </Wrapper>
          </Container>          
        )
      }     
    </>
  );
}

export default Header;