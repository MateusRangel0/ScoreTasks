import React, { Component } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap'
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
      })
  }

  render(){
    const { tasks } = this.state
    return (
      <div>
        <Link to="/nova_tarefa"><Button variant="dark">Nova Tarefa</Button></Link> 
        <Row>
          {
            tasks.map((e, index) => 
              <Col key={index} md={3}>
                <Card bg="dark" text="white">
                  <Card.Header>{e.name} {' - '} {e.points} pontos</Card.Header>
                  <Card.Body>
                    <Card.Title>{e.description}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </div>
    );
  }  
}

export default TaskView;
