import ToDoIndividual from "./ToDoIndividual";

export default function ToDoList({ arrToDos, setArrToDos }) {
  return (
    <>
      <table className="table">
        <thead>
            <th>#</th>
          <th>Tâche</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {arrToDos.length > 0 ? (
            arrToDos.map((todo, index) => (
              <ToDoIndividual
                id={index}
                {...todo}
                key={index}
                arrToDos={arrToDos}
                setArrToDos={setArrToDos}
              />
            ))
          ) : (
            <div>Aucune tâche...</div>
          )}
        </tbody>
      </table>
    </>
  );
}
