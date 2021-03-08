import React,{ useState, useEffect } from 'react';
import { Header, HorizonScroll, Latest, ShowContent} from '../../components';
import { Container } from './styles'
import {getLastsComics, getLastComic} from '../../services/lastsComics'
import { useLocation } from 'react-router-dom'

function Home() {

  const [comics, setComics] = useState({})
  const [comic, setComic] = useState({})
  const [limit, setLimit] = useState('30')
  const [seeAll, setSeeAll] = useState(false)
  let location = useLocation().pathname
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getLastsComics(limit)
       const res = await getLastComic()
       setComics(response.data) 
       setComic(res.data)   
     }
     fetchComics()
  },[limit, seeAll])

  function handleClick(){
    console.log('You clicked me!')
  }

  function switchPages(){
    setSeeAll(true)
  }


  return (
    <Container>
      <Header items={comic} hendleClick={handleClick}/>
        {
          seeAll ? <ShowContent items={comics} location={location} seeAll={seeAll}/>:
          <>
            <HorizonScroll/>
            <Latest setSeeAll={switchPages}/>
          </>
        }
    </Container>
  );
}

export default Home;