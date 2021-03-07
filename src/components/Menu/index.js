import React from 'react';
import { Wrapper, Navigator, About } from './styles';
import { Link } from 'react-router-dom'
 
function Menu() {
  return (
    <Navigator>
      <Wrapper>
        <Link to='./' style={{textDecoration: 'none'}}>
          <About>Home</About>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./newcomics'style={{textDecoration: 'none'}}>
          <About>New Comics</About>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./movies'style={{textDecoration: 'none'}}>
          <About>Movies</About>
        </Link>
      </Wrapper>
    </Navigator>  
  );
}

export default Menu;