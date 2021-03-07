import React,{useEffect, useState} from 'react';
import ComicViewer from '../../components/ComicViewer'
import {getBatman} from '../../services/batman'
import {
  Container,
  Row,
  Title,
  Line,
  LineContent,
  ComicContent
} from './styles'

function HorizonScroll() {

  const [batman, setBatman] = useState({})

  useEffect(()=>{
     async function fetchComicBatman(){
       const response = await getBatman()
       setBatman(response.data)
     }
     fetchComicBatman()
  },[])

  return (
    <Container>
      <Row>
        <Title>
          Batman
        </Title>
        <Line>
          <LineContent/>
        </Line>
      </Row>
      <ComicContent>
        {
          batman.results && batman.results.map((comic, index) => 
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
      </ComicContent>
    </Container>
  );
}

export default HorizonScroll;