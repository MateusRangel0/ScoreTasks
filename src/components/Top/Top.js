import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class App extends Component {

  signOut = () => {
    localStorage.clear();
  }

  render(){
    const logged = localStorage.getItem('Token')
    return (
      <Navbar bg="dark" variant="dark">
        <Nav>
          <Nav.Link href="/"> Inicio </Nav.Link>
        </Nav>
        <Nav pullright>
          {
            logged && 
            <Nav.Link onClick={this.signOut} href="/">
              <span>Sair</span>
            </Nav.Link>
          }
        </Nav>
      </Navbar>
    );
  }  
}

export default App;
