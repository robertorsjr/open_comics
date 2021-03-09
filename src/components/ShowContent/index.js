import React from 'react';
import CartazMovie from '../../components/CartazMovie'
import ComicViewer from '../../components/ComicViewer'
import Separator from '../../components/Separator'
import { Content, Wrapper, Container, ShowAll } from './styles';

function ShowContent({items, location, seeAll}) {

  if(location === '/movies'){
  
    return (
      <Content>
        <Wrapper>
          {
            items.results && items.results.map((item, index) =>
              <Separator y={340} x={176} key={index}>
                <CartazMovie item={item}/>
              </Separator> 
            )     
          }
        </Wrapper>     
      </Content>
    )
  }
  if(seeAll && location === '/'){
  
    return (
      <Container>
         <ShowAll padding={60}>
            {
            items.results && items.results.map((comic, index) => 
            <Separator y={223} x={290} key={index}>
              <ComicViewer 
                key={index}
                image={comic.image.original_url}
                date={comic.cover_date}
                title={comic.volume.name}
                issue={comic.issue_number}
                description={comic.name}
              />
              </Separator> 
            )
          }    
        </ShowAll>
      </Container>
    )
  }
}

export default ShowContent;