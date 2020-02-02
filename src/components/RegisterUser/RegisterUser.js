import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import Axios from 'axios';

class LoginForm extends Component {

  state = {
    email: '',
    username:'',
    password: '',
    confirmPassword: ''
  }

  submit = (event) => {
    event.preventDefault()
    const data = this.state
    Axios.post('https://scoretasks.herokuapp.com/user', data, {
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      document.location.reload(true)
    })
  }

  handleUserName = (event) => {
    this.setState({username: event.target.value})
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleConfirmPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  }

  render(){
    const {
      username,
      email,
      password,
      confirmPassword
    } = this.state

    return (
    <Container>
      <Form onSubmit={this.submit}>
        <Form.Group controlId="UserName">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control 
              onChange={this.handleUserName} 
              value={username} 
              placeholder="Digite seu nome de usuário"
            />
        </Form.Group>
        <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleEmail}
              value={email} 
              placeholder="Digite seu endereço de email"
            />
        </Form.Group>
        <Form.Group controlId="Password">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={this.handlePassword} 
              value={password} 
              placeholder="Digite sua senha"
            />
        </Form.Group>
        <Form.Group controlId="Password">
            <Form.Label>Confirmar senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={this.handleConfirmPassword} 
              value={confirmPassword} 
              placeholder="Digite novamente sua senha"
            />
        </Form.Group>
        <Button type="submit" variant="dark">Criar conta</Button>    
      </Form>
    </Container>
    )
  }
}

export default LoginForm;