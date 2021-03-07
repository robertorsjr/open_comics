import React,{ useState, useEffect } from 'react';
import { CartazMovie, Header, Separator } from '../../components';
import { Container, Content, Wrapper } from './styles'
import { getMovies, getMovie} from '../../services/movies'

function Movies() {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
  const [size, setSize] = useState('9')
 
  useEffect(()=>{
     async function fetchMovies(){
       const response = await getMovies(size)
       const resp = await getMovie(limit)
       setMovie(resp.data)
       setMovies(response.data)    
     }
     fetchMovies()
  },[limit])

  function hendleClick(){
    setLimit('1')
  }

  return (
    <Container>
        <Header items={movie} hendleClick={hendleClick}/>
        <Content>
          <Wrapper>
            {
              movies.results && movies.results.map((movie, index) => 
                <Separator y={340} x={176} key={index}>
                  <CartazMovie item={movie}/>
                </Separator>       
              )
            }
          </Wrapper>
        </Content>
    </Container>
  );
}

export default Movies;