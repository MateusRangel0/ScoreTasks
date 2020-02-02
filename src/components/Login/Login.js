import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Axios from 'axios';

class LoginForm extends Component {

  state = {
    username:'',
    password: ''
  }

  submit = (event) => {
    event.preventDefault()
    const data = this.state
    Axios.post('https://scoretasks.herokuapp.com/login', data, {
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      if(res.data.auth) localStorage.setItem('Token', res.data.token)
      document.location.reload(true)
    })
  }

  handleUserName = (event) => {
    this.setState({username: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render(){
    const {
        username,
        password
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
        <Form.Group controlId="Password">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={this.handlePassword} 
              value={password} 
              placeholder="Digite sua senha"
            />
        </Form.Group>
        <Row>
          <Col md={1}>
            <Button type="submit" variant="dark">Entrar</Button>    
          </Col>
          <Col>
            <Link to="/cadastro"><Button variant="dark">Cadastrar</Button></Link>    
          </Col>
        </Row>
      </Form>

    </Container>
    )
  }
}

export default LoginForm;