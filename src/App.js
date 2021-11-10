import React, { useState, useEffect } from "react";
// import app from "../../../Pokeapi/Rota";
import "./App.css";
import Cards from "./components/Cards/index";
import Infopoke from "./components/Cards/Pokeinfo/InfPoke";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [muda, setMuda] = useState("");

  useEffect(() => {
    click();
  }, [name]);

  const click = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const poke = name;
    if (muda) {
      setMuda("");
    }

    const fbusca = await fetch(`http://localhost:3002/poke/${poke}`, {
      method: "get",
      headers: { "Content-type": "application/json" },
    });
    let resp = await fbusca.json();
    setList(resp);
  };

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }

  return (
    <div className="App">
      <h1>Pokedex Top</h1>
      <form onSubmit={click}>
        <input
          type="text"
          id="busca"
          placeholder="Buscar Pokemon.."
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
      </form>
      <br />
      <div className="divbotao">
        <button onClick={refresh}>Limpar</button>

        <button onClick={click}>Buscar</button>
      </div>
      <br />
      {muda === "" ? (
        <Cards trocarMuda={setMuda} listFilter={list} />
      ) : (
        <Infopoke nomePoke={muda} />
      )}
    </div>
  );
}

export default App;
