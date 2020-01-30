import React, { Component } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'
import axios from 'axios'

class TaskView extends Component {
  
  state = {
    tasks: []
  }

  componentDidMount = () => {
    axios.get('https://scoretasks.herokuapp.com/task')
      .then((res) => {
        this.setState({tasks: res.data.data})
      })
  }

  render(){
    const { tasks } = this.state
    return (
      <Container>
        <Row>
          {
            tasks.map((e, index) => 
              <Col key={index} md={6}>
                <Card.Title>
                  {e.name} {' - '} {e.points} pontos
                </Card.Title>
                <Card body>
                  {e.description}
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    );
  }  
}

export default TaskView;
