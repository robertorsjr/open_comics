import React,{useState, useEffect} from 'react';
import { Button, ComicViewer } from '../../components'
import {getLastsComics} from '../../services/lastsComics'
import {
  Container,
  Wraper,
  LastComics,
  Updates
} from './styles'

function Latest({setSeeAll}) {

  const [comics, setComics] = useState({})
  const [limit]= useState('4')

  useEffect(()=>{
     async function fetchLastsComics(){
       const response = await getLastsComics(limit)
       setComics(response.data)     
     }
     fetchLastsComics()
  },[limit,])

  return (
    <Container>
      <Wraper>
        <LastComics>
          Last Comics
        </LastComics>
        <Button bkcolor={'#0277BD'} color={'#FFFFFF'} text={'See All'} handleClick={setSeeAll}/>
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
            />
          )
        }       
      </Updates>
    </Container>  
  );
}

export default Latest;