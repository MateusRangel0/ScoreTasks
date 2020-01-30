import React from 'react';
import './App.css';

function App() {
  return (

    <div className="container">
      <h1>ScoreTasks</h1>
    
      <div className='content'>
        <form>
          <label htmlFor="task"></label>
          <input
            id="task"
            type="task"
            placeholder="Crie uma nova tarefa"
          />

          <button className="btn" type="submit">Criar</button>
        </form>
      </div>
    </div>
  );

  
}

export default App;
