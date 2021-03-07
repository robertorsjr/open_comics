import React,{ useState, useEffect } from 'react';
import { Header } from '../../components';
import { Container, Content } from './styles'
import {getMovies} from '../../services/movies'


function Movies() {

  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getMovies(limit)
       setMovies(response.data)    
     }
     fetchComics()
  },[limit])


  function hendleClick(){
    setLimit('1')
  }

  return (
    <Container>
        <Header items={movies} hendleClick={hendleClick}/>
        <Content/>
    </Container>
  );
}

export default Movies;