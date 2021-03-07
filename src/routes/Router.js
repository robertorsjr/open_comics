import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
    width: ${({width}) => width}px;
    height: 29px;
    display:flex;
    align-items:center;
`

const NavHome = styled.div` // temporario.
  width: 228px;
  height: 29px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    max-width:200px;
    margin-right:40px;
`

export default function App() {
  return (
    <Router>
      <Row>
        <NavHome>
            <Container  width={60}>
                <Link to="/">Home</Link>
            </Container>
        </NavHome>
        <NavHome>
            <Container  width={84}>
            <Link to="/about">New Comics</Link>
            </Container>     
        </NavHome>
        <NavHome>
            <Container  width={41}>
            <Link to="/users">Movies</Link>
            </Container>       
        </NavHome>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Row>
    </Router>
  );
}

function Home() {
  return <h2>'</h2>
}

function About() {
  return <h2>'</h2>;
}

function Users() {
  return <h2>'</h2>;
}