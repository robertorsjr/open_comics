import React,{ useState, useEffect } from 'react';
import { Header, HorizonScroll, Latest, ShowContent} from '../../components';
import { Container } from './styles'
import {getLastsComics} from '../../services/lastsComics'
import { useLocation } from 'react-router-dom'

function Home() {

  const [comics, setComics] = useState({})
  const [seeAll, setSeeAll] = useState(false)
  let location = useLocation().pathname
  const [limit] = useState('30')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getLastsComics(limit)
       setComics(response.data) 
     }
     fetchComics()
  },[limit, seeAll])

  function handleClick(){
    console.warn('You clicked me!')
  }

  function showAll(){
    setSeeAll(!seeAll)
  }

  return (
    <Container>
      <Header  hendleClick={handleClick}/>
      {
        seeAll ? <ShowContent items={comics} location={location} seeAll={seeAll} setSeeAll={showAll}/>:
        <>
          <HorizonScroll/>
          <Latest setSeeAll={showAll}/>
        </>
      }
    </Container>
  );
}

export default Home;