import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import {TodoListStore} from './components/TodoList';
import {CounterStore} from './components/Counter'
import store from './store/index.js'

function App() {


  return (
    <Provider store={store}>
      <TodoListStore />
      <CounterStore />
    </Provider>
  );
}

export default App;
