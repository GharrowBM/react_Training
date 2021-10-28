import {combineReducers, createStore} from 'redux'
import {TodoReducer} from './todoReducer'
import {CounterReducer} from './counterReducer'

export default createStore(
    combineReducers({
      todos: TodoReducer,
      counter: CounterReducer,
      filter: (state = 0, action) => state
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );