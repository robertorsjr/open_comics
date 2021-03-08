import React,{ useState, useEffect } from 'react';
import { Header, ShowContent } from '../../components';
import { Container } from './styles'
import { getMovies, getMovie} from '../../services/movies'
import { useLocation } from 'react-router-dom'

function Movies() {

  const [movie, setMovie] = useState({})
  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
  const [size, setSize] = useState('9')
  const [location, setLocation] = useState(useLocation())
 
  useEffect(()=>{
     async function fetchMovies(){
       const response = await getMovies(size)
       const resp = await getMovie(limit)
       setMovie(resp.data)
       setMovies(response.data)    
     }
     fetchMovies()
  },[limit, location])

  function handleClick(){
    setLimit('1')
  }

  return (
    <Container>
      <Header items={movie} handleClick={handleClick}/>
      <ShowContent items={movies} location={location.pathname}/>
    </Container>
  );
}

export default Movies;