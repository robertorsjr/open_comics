import React,{ useState, useEffect} from 'react';
import {Header} from '../../components'
import { Container, Content } from './styles';
import { getLastsComics } from '../../services/lastsComics'

function NewComics() {
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
      <Header items={comics} handleClick={handleClick}/>
      <Content/>
    </Container>
  );
}

export default NewComics;