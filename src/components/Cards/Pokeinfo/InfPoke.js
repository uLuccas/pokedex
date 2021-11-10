import React, { useState, useEffect } from "react";
import { types } from "../Card";

const Infopoke = (props) => {
  const [poke, setPoke] = useState();

  useEffect(async () => {
    const fbusca = await fetch(`http://localhost:3002/poke/${props.nomePoke}`, {
      method: "get",
      headers: { "Content-type": "application/json" },
    });
    let [resp] = await fbusca.json();
    // console.log(resp);
    setPoke(resp);
  }, []);

  const generateID = (id) => {
    console.log(id);
    const diff = 3 - id.toString().length;
    let resp = id;
    let i = 0;
    while (i < diff) {
      resp = "0" + resp;
      i++;
    }

    return resp;
  };

  function refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }

  return (
    <div>
      {poke && (
        <>
          <h3 className="title">{poke.name}</h3>
          <br />
          <div
            className="areaInfo"
            style={{
              backgroundColor: types[poke.type_1] || "black",
            }}
          >
            <img
              src={`images/${generateID(poke.id)}.png`}
              alt={poke.id}
              className="fotoinfopoke"
            />
            <div className="informacoes">
              <table border="3">
                <tr>
                  <td colSpan="2">Informações</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>{poke.total}</td>
                </tr>

                <tr>
                  <td>Hp:</td>
                  <td>{poke.hp}</td>
                </tr>
                <tr>
                  <td>Ataque:</td>
                  <td>{poke.attack}</td>
                </tr>
                <tr>
                  <td>Speed Ataque</td>
                  <td>{poke.speed_atk}</td>
                </tr>

                <tr>
                  <td>Defesa</td>
                  <td>{poke.defense}</td>
                </tr>
                <tr>
                  <td>Speed Defesa:</td>
                  <td>{poke.speed_def}</td>
                </tr>
                <tr>
                  <td>Velocidade:</td>
                  <td>{poke.speed}</td>
                </tr>
                <tr>
                  <td>Geração:</td>
                  <td>{poke.generation}</td>
                </tr>
              </table>
            </div>
          </div>
        </>
      )}
      <hr />
      <button onClick={refresh}>Voltar</button>
    </div>
  );
};

export default Infopoke;
