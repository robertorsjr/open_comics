import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLastComic } from '../../store/ducks/lastComic';
import { requestMovie } from '../../store/ducks/movie'
import { useLocation } from 'react-router-dom';
import {
  Search,
  ShowLast,
  Menu,
  Separator 
} from '../../components';
import{
  Container,
  Row,
  TitleBox,
  Title,
  BackImage,
  Wrapper,
  Opacity
} from './styles'


function Header({handleClick}) {
  const data = useSelector(({ lastComicState }) => lastComicState.data)
  const movieData = useSelector(({ movieState }) => movieState.data)
  const dispatch = useDispatch()
  let location = useLocation();

  useEffect(()=>{
    dispatch(requestLastComic())
    dispatch(requestMovie())
  },[dispatch])

console.warn(movieData.results)
  if(location.pathname === '/' || location.pathname === '/newcomics'){

    return(
      <>
        {
          data.results && data.results.map((item, index) =>
          
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
              <ShowLast 
                handleClick={handleClick}
                title={item.volume.name }
                issue={item.issue_number}
                subtitle={item.name}
                description={item.description}
              />
            </Wrapper>
            </Container>
          )
        }
      </> 
    )
  }
  
  if(location.pathname === '/movies'){

    return (
      <>
        { 
          movieData.results && movieData.results.map((movie , index)=>
            <Container key={index}>
            <BackImage image={movie.image.original_url}/>
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
                <ShowLast 
                  location={location.pathname}
                  hendleClick={handleClick}
                  title={movie.name }
                  subtitle={movie.deck}
                  description={movie.description}
                />  
            </Wrapper>
            </Container>          
          )
        }     
      </>
    );
  }
}

export default Header;