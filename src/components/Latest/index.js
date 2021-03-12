import React,{useEffect} from 'react';
import { Button, ComicViewer } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { requestLastsComics } from '../../store/ducks/lastsComics';
import {
  Container,
  Wraper,
  LastComics,
  Updates
} from './styles'

function Latest({setSeeAll}) {

  const data = useSelector(({ lastsComicsState }) => lastsComicsState.data)
  const dispatch = useDispatch()
  const limit = 4 

  useEffect(()=>{
    dispatch(requestLastsComics(limit))
  },[dispatch])

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
          data.results && data.results.map((comic, index) => 
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