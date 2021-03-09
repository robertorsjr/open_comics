import React from 'react';
import { Wrapper, Navigator, About, SelectedLine } from './styles';
import { Link, useLocation } from 'react-router-dom'
 
function Menu() {
  let location = useLocation();

  return (
    <Navigator>
      <Wrapper>
        <Link to='./' style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/' ? '100' : null}>Home</About>
          <SelectedLine x={21} margin={3} opacity={location.pathname === '/' ? '100' : null}/>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./newcomics'style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/newcomics' ? '100' : null}>New Comics</About>
          <SelectedLine x={53} margin={6} opacity={location.pathname === '/newcomics' ? '100' : null}/>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to='./movies'style={{textDecoration: 'none'}}>
          <About opacity={location.pathname === '/movies' ? '100' : null }>Movies</About>
          <SelectedLine x={24} margin={6} opacity={location.pathname === '/movies' ? '100' : null}/>
        </Link>
      </Wrapper>
    </Navigator>  
  );
}

export default Menu;