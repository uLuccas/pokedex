import React from "react";
import { useState } from "react";

export const types = {
  bug: "#32CD32",
  grass: "#3CB371",
  poison: "#BA55D3",
  psychic: "#9932CC",
  fire: "#FF8C00",
  electric: "#FFD700",
  water: "#00BFFF",
  normal: "#A8A77A",
  flying: "#E0FFFF",
  ground: "#DEB887",
  fairy: "#FF69B4",
  fighting: "#CD853F",
  rock: "#B6A136",
  steel: "#D3D3D3",
  ghost: "#735797",
  dark: "#000080",
  ice: "#B0E0E6",
  dragon: "#6F35FC",
};

export default function Card(props) {
  const { id, name, type_1, type_2 } = props;

  const [isOver, setIsOver] = useState(false);

  const generateID = (id) => {
    const diff = 3 - id.toString().length;
    let resp = id;
    let i = 0;
    while (i < diff) {
      resp = "0" + resp;
      i++;
    }
    return resp;
  };

  return (
    <div>
      {/* <p>Voce escreveu : {props.name}</p> */}

      <li
        onClick={() => {
          props.trocarMuda(name);
        }}
        className="cards"
        style={{
          backgroundColor: types[isOver ? type_2 : type_1] || "black",
        }}
        onMouseOver={() => {
          setIsOver(true);
        }}
        onMouseOut={() => {
          setIsOver(false);
        }}
      >
        <h2>{name}</h2>

        <img
          src={`images/${generateID(id)}.png`}
          alt={id}
          className="fotopoke"
        />
        <p>{type_1 && type_2 ? `${type_1} / ${type_2}` : `${type_1}`}</p>
      </li>
    </div>
  );
}
