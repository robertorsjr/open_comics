import React,{ useState, useEffect } from 'react';
import { Header, HorizonScroll, Latest} from '../../components';
import { Container } from './styles'
import {getLastsComics} from '../../services/lastsComics'

function Home() {

  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('1')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getLastsComics(limit)
       setComics(response.data)    
     }
     fetchComics()
  },[limit])

  function handleClick(){
    setLimit('1')
  }

  return (
    <Container>
        <Header items={comics} hendleClick={handleClick}/>
        <HorizonScroll/>
        <Latest/>
    </Container>
  );
}

export default Home;