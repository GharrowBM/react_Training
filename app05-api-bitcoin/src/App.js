import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";

// TODO Ajouter support https://old.coindesk.com/coindesk-api avec https://apexcharts.com/docs/react-charts/
// Pour avoir une version avec graphique montrant l'évolution du cours du Bitcoin sur plusieurs jours (CandleStick)

function App() {
  useEffect(() => {
    async function fetchPrices() {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      if (prices === undefined) {
        console.log("Prices");
        console.log(data);
        setPrices(data);
      }
    }

    async function fetchChart() {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/historical/close.json"
      );
      const data = await response.json();
      const cat = await Object.keys(data.bpi);
      const ser = await Object.values(data.bpi);
      if (series === undefined) {
        console.log("Categories");
        console.log(cat);
        console.log("Series");
        console.log(ser);
        setOptions({
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: cat,
          },
        });
        setSeries([
          {
            name: "Bitcoin to USD",
            data: ser,
          },
        ]);
      }
    }

    fetchPrices();
    fetchChart();
  });

  const [options, setOptions] = useState();
  const [prices, setPrices] = useState();
  const [rate, setRate] = useState("");
  const [series, setSeries] = useState();

  return (
    <div className="App">
      <h1>Valeur du BitCoin</h1>
      <select
        name="select-bitcoin-rate"
        id="select-bitcoin-rate"
        onChange={(e) => setRate(e.currentTarget.value)}
      >
        <option value=""></option>
        <option value="USD">En USD</option>
        <option value="EUR">En EUR</option>
        <option value="GBP">En GBP</option>
      </select>

      <div>
        Valeur en {rate} =
        <b>
          {rate !== ""
            ? " " +
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: prices.bpi[rate].code,
              }).format(prices.bpi[rate].rate_float)
            : ""}
        </b>
      </div>
      <div>
        <h2>
          Evolution du prix du BitCoin en USD durant ces 30 derniers jours
        </h2>
        {series ? (
          <div className="center-chart">
            <Chart options={options} series={series} type="line" width="500" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
