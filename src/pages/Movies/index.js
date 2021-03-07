import React,{ useState, useEffect } from 'react';
import { CartazMovie, Header, Separator, Row } from '../../components';
import { Container, Content } from './styles'
import {getMovies} from '../../services/movies'


function Movies() {

  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
 
  useEffect(()=>{
     async function fetchMovies(){
       const response = await getMovies(limit)
       setMovies(response.data)    
     }
     fetchMovies()
  },[limit])

  function hendleClick(){
    setLimit('1')
  }

  return (
    <Container>
        <Header items={movies} hendleClick={hendleClick}/>
        <Content>
          <Row>
            {
              movies.results && movies.results.map(movie => 
                <CartazMovie 
                  item={movie}
                />
              )
            }
          </Row>
          <Separator y={56}/>
        </Content>
    </Container>
  );
}

export default Movies;