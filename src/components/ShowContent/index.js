import React from 'react';
import CartazMovie from '../../components/CartazMovie'
import Separator from '../../components/Separator'
import { Content, Wrapper } from './styles';

function ShowContent({items}) {
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
  );
}

export default ShowContent;