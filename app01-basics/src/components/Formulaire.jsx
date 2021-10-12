import { useState } from "react";
import "../styles/Formulaire.css";

function handleSubmit(e) {
    e.preventDefault();
    alert(e.currentTarget['first-name'].value)

}

export default function Formulaire() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control form">
        <div className="mb-3">
          <label htmlFor="last-name">Nom : </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first-name">Prénom : </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mail">Mail : </label>
          <input
            type="text"
            name="mail"
            id="mail"
            onChange={(e) => setMail(e.currentTarget.value)}
          />
        </div>
        <select className="form-select" aria-label="Default select example" onChange={(e) => setType(e.currentTarget.value)}>
          <option selected disabled>Choisissez le type de demande</option>
          <option value="1">Renseignement à propos d'une formation</option>
          <option value="2">Demande de rendez-vous</option>
          <option value="3">Autre</option>
        </select>
        <div className="mb-3">
          <label htmlFor="asking">Formulez votre demande : </label>
          <input
            type="text"
            name="asking"
            id="asking"
            onChange={(e) => setText(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}
