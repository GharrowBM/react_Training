import logo from "./logo.svg";
import axios from "axios";
import {useState} from 'react'
import "./App.css";

function App() {
  const search = (siret) => {
    // On effectue la recherche en usant de l'API
    axios
      .get("https://api.insee.fr/entreprises/sirene/V3/siret/" + siret, {
        headers: {
          Authorization: "Bearer a0af3543-97e0-3011-895e-2a0838a4e3f4",
        },
      })
      .then((res) => {
        if (res.data.header.statut === 200) {
          setEntreprise(res.data.etablissement)
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [entreprise, setEntreprise] = useState(null);
  const [loading, setLoading] = useState(true)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="search-area">
          <input
            type="text"
            name="search-input"
            id="search-input"
            placeholder="Numéro de SIRET"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <button className="search-button" onClick={() => search(inputValue)}>Chercher</button>
        </div>
        <div className="search-result">
          <div className="left-column row-1">SIRET :</div>
          <div className="left-column row-2">Nom entreprise :</div>
          <div className="left-column row-3">Siège social :</div>
          <div className="left-column row-4">Date de création :</div>
          <div className="left-column row-5">Date dernier traitement :</div>
          <div className="left-column row-6">Adresse :</div>
          
            {entreprise ?     
            <>
            <div className="right-column row-1">{entreprise.siret}</div>
            <div className="right-column row-2">{entreprise.uniteLegale.denominationUniteLegale}</div>
            <div className="right-column row-3">{entreprise.etablissementSiege ? entreprise.etablissementSiege : "Non"}</div>
            <div className="right-column row-4">{entreprise.dateCreationEtablissement}</div>
            <div className="right-column row-5">{entreprise.dateDernierTraitementEtablissement}</div>
            <div className="right-column row-6">{entreprise.adresseEtablissement.numeroVoieEtablissement} {entreprise.adresseEtablissement.typeVoieEtablissement} {entreprise.adresseEtablissement.libelleVoieEtablissement} {entreprise.adresseEtablissement.libelleCommuneEtablissement} {entreprise.adresseEtablissement.codeCommuneEtablissement} <br /> 
                                                {entreprise.adresseEtablissement.libelleCedexEtablissement}</div>
            </>
            :        
                ""
            }

          <div className="search-output"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
