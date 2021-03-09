import React from 'react';
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

function Header({ items, handleClick}) {

  let location = useLocation();

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
                (location.pathname === '/' || location.pathname === '/newcomics') ?   
                <ShowLast 
                  handleClick={handleClick}
                  title={item.volume.name }
                  issue={item.issue_number}
                  subtitle={item.name}
                  description={item.description}
                />
                : null
              }
              {
                location.pathname === '/movies' &&
                <ShowLast 
                  location={location.pathname}
                  hendleClick={handleClick}
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