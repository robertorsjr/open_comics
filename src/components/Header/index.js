import React,{useEffect,useState} from 'react';
import Search from '../../components/Search';
import ShowLast from '../../components/ShowLast'
import {getLastsComics} from '../../services/lastsComics'
import {
  Container,
  Row,
  TitleBox,
  Title
} from './styles'

function Header() {

  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('1')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getLastsComics(limit)
       setComics(response.data)    
     }
     fetchComics()
  },[limit])

  function hendleClick(){
    setLimit('1')
  }

  return (
    <>
      { 
        comics.results && comics.results.map((comic, index) =>
          <Container key={index} image={comic.image.original_url}>
            <Row >
              <TitleBox>
                <Title>OPENCOMICS</Title>
              </TitleBox>
              <Search/>
            </Row>         
            <ShowLast 
             hendleClick={hendleClick}
             key={comic.issue_number}
             title={comic.volume.name}
             issue={comic.issue_number}
             subtitle={comic.name}
             description={comic.description}
            />         
          </Container>
        )
        }     
      </>
  );
}

export default Header;