import { useState } from "react";

export default function ToDoIndividual({ id, name, isDone, arrToDos, setArrToDos }) {

    function deleteElement() {
        console.log(arrToDos)
        setArrToDos(arrToDos.filter())
    }

  return (
    <>
      <tr>
          <td>
              {id}
          </td>
        <td>
          <input type="text" value={name} />
        </td>
        <td>
          {isDone ? (
            <button className="btn btn-info">Terminé</button>
          ) : (
            <button className="btn btn-secondary">A Faire</button>
          )}
          <button className="btn btn-dark">Editer</button>
          <button className="btn btn-danger" onClick={() => deleteElement()}>Supprimer</button>
        </td>
      </tr>
    </>
  );
}
