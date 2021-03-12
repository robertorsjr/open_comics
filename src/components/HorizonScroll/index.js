import React,{ useEffect } from 'react';
import { ComicViewer } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { requestFilter } from '../../store/ducks/filter';
import {
  Container,
  Row,
  Title,
  Line,
  LineContent,
  ComicContent
} from './styles'

function HorizonScroll() {
  const data = useSelector(({ filterState }) => filterState.data)
  const dispatch = useDispatch()

  const comics = 'batman'
  const limit = 10

  useEffect(() => {
    dispatch(requestFilter(limit, comics))
  }, [dispatch])

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
      </ComicContent>
    </Container>
  );
}

export default HorizonScroll;