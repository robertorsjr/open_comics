import React,{ useState, useEffect } from 'react';
import { Header, ShowContent } from '../../components';
import { Container } from './styles'
import { getMovies} from '../../services/movies'
import { useLocation } from 'react-router-dom'

function Movies() {

  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
  const [size] = useState('9')
  let location = useLocation()
 
  useEffect(()=>{
     async function fetchMovies(){
       const response = await getMovies(size)
       setMovies(response.data)    
     }
     fetchMovies()
  },[limit, size])

  function handleClick(){
    setLimit('1')
  }

  return (
    <Container>
      <Header handleClick={handleClick}/>
      <ShowContent items={movies} location={location.pathname}/>
    </Container>
  );
}

export default Movies;