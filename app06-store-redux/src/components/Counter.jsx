import {createStore} from 'redux'
import {useState} from 'react'
import {Provider} from 'react-redux'
import '../styles/Counter.css'

function Counter() {

  const initialState = {
    value: 0,
  };

  const PLUS_COUNTER_ACTION = "PLUS_COUNTER_ACTION";
  const MINUS_COUNTER_ACTION = "MINUS_COUNTER_ACTION";

  function CounterReducer(state = initialState, action) {
    switch (action.type) {
      case PLUS_COUNTER_ACTION:
        return {
          value: state.value + parseInt(action.modifier),
        };
      case MINUS_COUNTER_ACTION:
        return {
          value: state.value - parseInt(action.modifier),
        };
      default:
        return state;
    }
  }

  const store = createStore(
      CounterReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    store.subscribe(() => console.log(store.getState()))

    store.dispatch({type: PLUS_COUNTER_ACTION, modifier: 1})
    store.dispatch({type: MINUS_COUNTER_ACTION, modifier: 1})

    const [inputValue, setInputValue] = useState('')

  return (
      <Provider store={store}>
                <div className="counter">
          <div className="counter-input">
              <input type="text" name="input-value" id="input-value" placeholder="Valeur" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}/>
              <button onClick={() => store.dispatch({type: PLUS_COUNTER_ACTION, modifier: inputValue})}>+</button>
              <button onClick={() => store.dispatch({type: MINUS_COUNTER_ACTION, modifier: inputValue})}>-</button>
          </div>
          <div className="counter-result">
              <h2>La valeur du compteur est de XXX</h2>
          </div>
      </div>
      </Provider>
  );
}

export default Counter;
