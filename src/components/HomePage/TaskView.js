import React, { Component } from 'react';
import { Col, Row, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Axios from 'axios'

class TaskView extends Component {
  
  state = {
    tasks: []
  }

  componentDidMount = () => {
    const token = localStorage.getItem('Token')
    Axios.get('https://scoretasks.herokuapp.com/task', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    })
      .then((res) => {
        this.setState({tasks: res.data.data})

      });

      Axios.get('https://scoretasks.herokuapp.com/cadastro', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    })
    .then((res) => {
        this.setState({username: res.data.content.username})
    })
  }

  render(){
    const { tasks } = this.state  
    const totalPoints = 0

    return (
      <React.Fragment>
        <Link to="/nova_tarefa"><Button variant="dark">Nova Tarefa</Button></Link>
        <Row>
          {
          tasks.map((e, index) =>
            <Col key={index} md={3}>
              <Card bg="dark" text="white">
                <Card.Header>{e.name} {' - '} {e.points} pontos</Card.Header> 
                <Card.Body>
                  <Card.Title>{e.description}</Card.Title>
                  <Card bg="dark" text="white">
                    <Card.Text>Categorias</Card.Text>
                    <Card.Text>{e.category}</Card.Text>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          )
          }
          <Card bg="dark" text="white" style={{ width: '12rem' }}>
            <Card.Body>
              <Card.Title>Pontos Obtidos</Card.Title>
              <Card.Text text="primary">{totalPoints} Pontos</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        
      </React.Fragment>
    );
  }  
}

export default TaskView;
