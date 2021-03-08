import React,{ useState, useEffect } from 'react';
import { Header, ShowContent } from '../../components';
import { Container } from './styles'
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

  function handleClick(){
    setLimit('1')
  }

  return (
    <Container>
      <Header items={movie} handleClick={handleClick}/>
      <ShowContent items={movies}/>
    </Container>
  );
}

export default Movies;