import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import TaskForm from './components/TaskForm/TaskForm'
import TaskView from './components/TaskView/TaskView'
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

class App extends Component {
  render(){
    return (
      <Container>
        <h1>ScoreTasks</h1>
        <Route exact path='/' component={TaskForm}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/register' component={RegisterForm}/>
        <Route exact path='/view' component={TaskView}/>
      </Container>
    );
  }  
}

export default App;
