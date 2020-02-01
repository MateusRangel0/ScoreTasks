import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class LoginForm extends Component {

  state = {
    userName:'',
    password: ''
  }

  submit = (event) => {
    event.preventDefault()
  }

  handleUserName = (event) => {
    this.setState({userName: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render(){
    const {
        userName,
        password
    } = this.state

    return (
    <Container>
      <Form onSubmit={this.submit}>
        <Form.Group controlId="UserName">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control 
              onChange={this.handleUserName} 
              value={userName} 
              placeholder="Digite seu nome de usuário"
            />
        </Form.Group>
      </Form>

      <Form onSubmit={this.submit}>
        <Form.Group controlId="Password">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={this.handlePassword} 
              value={password} 
              placeholder="Digite sua senha"
            />
        </Form.Group>
      </Form>
      <Button variant="dark">Entrar</Button>    
    </Container>
    )
  }
}

export default LoginForm;