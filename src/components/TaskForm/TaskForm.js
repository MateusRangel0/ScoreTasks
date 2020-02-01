import React, { Component } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

class TaskForm extends Component {

  state = {
    name: '',
    description: '',
    points: 0,
    positive: true //boolean
  }

  submit = (event) => {
    event.preventDefault()
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handleDescription = (event) => {
    this.setState({description: event.target.value})
  }

  handlePoints = (event) => {
    this.setState({points: Number(event.target.value)})
  }

  handlePositive = (event) => {
    this.setState({positive: event.target.value})
  }

  render(){
    const { 
      name,
      description,
      points,
      positive
    } = this.state

    return (
      <Container>
        <Form onSubmit={this.submit}>
          <Form.Group controlId="Name">
            <Form.Label>Nome da Task</Form.Label>
            <Form.Control 
              onChange={this.handleName} 
              value={name} 
              placeholder="Digite o nome da task"
            />
          </Form.Group>
        </Form>

        <Form onSubmit={this.submit}>
          <Form.Group controlId="Description">
            <Form.Label>Descrição da Task</Form.Label>
            <Form.Control 
              onChange={this.handleDescription} 
              value={description} 
              placeholder="Digite a descrição da task"
            />
          </Form.Group>
        </Form>

        <Form onSubmit={this.submit}>
          <Form.Group controlId="points">
            <Form.Label>Pontuação da task</Form.Label>
            <Form.Control 
              type="number" 
              min="0" 
              onChange={this.handlePoints} 
              value={points} 
              placeholder="Digite a pontuação da task"
            />
          </Form.Group>
        </Form>

        <Form>
          <Row>
          <Col md={2}>
            <Form.Label>A task é positiva?</Form.Label>
          </Col>
          <Col>
            <Form.Check 
              type="switch"
              id="positive"
              label=""
              onChange={this.handlePositive}
              value={positive}
            />
          </Col>
        </Row>  
        <Button variant="dark">Criar</Button>          
        </Form>

      </Container>
    );
  }  
}

export default TaskForm;
