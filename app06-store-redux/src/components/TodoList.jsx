import { createStore } from "redux";

function TodoList() {
  let id = 2;

  const initialState = [
    {
      id: 1,
      title: "Enregistrer le tutoriel",
      completed: false,
    },
    {
      id: 2,
      title: "Préparer le tutoriel",
      completed: true,
    },
  ];

  const ADD_TODO_ACTION = "ADD_TODO_ACTION";

  function TodoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO_ACTION:
        return [
          ...state,
          {
            id: ++id,
            ...action.payload,
            completed: false,
          },
        ];
      default:
        return state;
    }
  }

  const store = createStore(
    TodoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(() => console.log(store.getState()));

  store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo" } });
  store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo" } });
  store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo" } });
  store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo" } });

  return <></>;
}

export default TodoList;
