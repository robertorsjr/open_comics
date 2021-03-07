import React,{useState, useEffect} from 'react';
import Button from '../../components/Button'
import ComicViewer from '../../components/ComicViewer'
import {getLastsComics} from '../../services/lastsComics'
import {
  Container,
  Wraper,
  LastComics,
  Updates
} from './styles'


function Latest() {

  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('4')

  useEffect(()=>{
     async function fetchLastsComics(){
       const response = await getLastsComics(limit)
       setComics(response.data)     
     }
     fetchLastsComics()
  },[limit])

  function hendleClick(){
    setLimit('10')
  }

  return (
    <Container>
      <Wraper>
        <LastComics>
          Last Comics
        </LastComics>
        <Button bkcolor={'#0277BD'} collor={'#FFFFFF'} text={'See All'} hendleClick={hendleClick}/>
      </Wraper>
      <Updates > 
        {
        comics.results && comics.results.map((comic, index) => 
          <ComicViewer 
            key={index}
            image={comic.image.original_url}
            date={comic.cover_date}
            title={comic.volume.name}
            issue={comic.issue_number}
            description={comic.name}
          />)
        }       
      </Updates>
    </Container>
  );
}

export default Latest;