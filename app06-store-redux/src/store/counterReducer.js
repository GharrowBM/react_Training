const initialState = {
    value: 0,
  };

  export const PLUS_COUNTER_ACTION = "PLUS_COUNTER_ACTION";
  export const MINUS_COUNTER_ACTION = "MINUS_COUNTER_ACTION";

  export function CounterReducer(state = initialState, action) {
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