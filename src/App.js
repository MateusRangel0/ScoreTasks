import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Top from './components/Top/Top'
import TaskForm from './components/TaskForm/TaskForm'
import TaskView from './components/HomePage/TaskView'
import Login from './components/Login/Login';
import RegisterUser from './components/RegisterUser/RegisterUser';

class App extends Component {
  render(){
    const logged = localStorage.getItem('Token')
    return (
      <div>
        <Top/>
        <Container>
          <h1>ScoreTasks</h1>
          {!logged && <Route exact path='/' component={Login}/>}
          {logged && <Route exact path='/' component={TaskView}/>}
          <Route exact path='/cadastro' component={RegisterUser}/>
          <Route exact path='/nova_tarefa' component={TaskForm}/>
        </Container>
      </div>
    );
  }  
}

export default App;
