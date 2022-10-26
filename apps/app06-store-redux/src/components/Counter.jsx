import {useState} from 'react'
import { PLUS_COUNTER_ACTION, MINUS_COUNTER_ACTION } from '../store/counterReducer';
import {connect} from 'react-redux'
import '../styles/Counter.css'

export function Counter({counter, plusCounter, minusCounter}) {

  const [inputValue, setInputValue] = useState('')

  return (
                <div className="counter">
            <div className="counter-input">
                <input type="text" name="input-value" id="input-value" placeholder="Valeur" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}/>
                <button onClick={() => plusCounter(inputValue)}>+</button>
                <button onClick={() => minusCounter(inputValue)}>-</button>
            </div>
            <div className="counter-result">
                <h2>La valeur du compteur est de {counter.value}</h2>
            </div>
      </div>
  );
}

export const CounterStore = connect(
  (state) => ({
    counter : state.counter
  }),
  (dispatch) => ({
    plusCounter: (modifierValue) => dispatch({
      type: PLUS_COUNTER_ACTION,
      modifier: modifierValue
    }),
    minusCounter: (modifierValue) => dispatch({
      type:MINUS_COUNTER_ACTION,
      modifier: modifierValue
    })
  })
)(Counter)
