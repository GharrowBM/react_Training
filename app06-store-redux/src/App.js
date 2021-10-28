import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="App">
      <Provider>
                <Counter />        
        {/* <TodoList /> */}
      </Provider>


    </div>
  );
}

export default App;
