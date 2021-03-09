import React from 'react';
import {
  CartazMovie,
  ComicViewer,
  Separator,
  ButtonLink 
} from '../../components'
import { Content, Wrapper, Container, ShowAll } from './styles';

function ShowContent({items, location, seeAll, setSeeAll}) {

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
        <ButtonLink 
        click={setSeeAll}
        y={55}
        x={40}
        size={15}
        text={'Home'}
        color={'#0277BD'}
        />
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