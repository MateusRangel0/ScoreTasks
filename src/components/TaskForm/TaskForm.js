import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class TaskForm extends Component {

  state = {
    name: ''
  }

  submit = (event) => {
    event.preventDefault()
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  render(){
    const { name } = this.state 
    return (
      <Container>
        <Form onSubmit={this.submit}>
          <Form.Group controlId="Name">
            <Form.Label>Nome da Task</Form.Label>
            <Form.Control onChange={this.handleName} value={name} placeholder="Digite o nome da task"/>
          </Form.Group>
          <Button variant="dark">Criar</Button>
        </Form>
      </Container>
    );
  }  
}

export default TaskForm;
