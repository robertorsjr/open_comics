import React,{ useEffect } from 'react';
import { Wrapper, Navigator, About } from './styles';
import { Link, useLocation } from 'react-router-dom'
 
function Menu() {
  let location = useLocation();

  return (
    <Navigator>
      <Wrapper>
        <Link to='./' style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/' ? '100' : null}>Home</About>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./newcomics'style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/newcomics' ? '100' : null}>New Comics</About>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./movies'style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/movies' ? '100' : null}>Movies</About>
        </Link>
      </Wrapper>
    </Navigator>  
  );
}

export default Menu;