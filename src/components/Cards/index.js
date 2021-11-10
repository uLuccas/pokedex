import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../services/api";
import Card from "./Card";

export default function Cards(props) {
  const { listFilter, trocarMuda } = props;
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    api.get("/listar").then((response) => setPokemons(response.data));
  }, []);

  let list = listFilter.length === 0 ? pokemons : listFilter;

  return (
    <div className="negocinho">
      {list.map((item) => (
        <Card
          trocarMuda={trocarMuda}
          name={item.name}
          id={item.id}
          type_1={item.type_1}
          type_2={item.type_2}
        />
      ))}
    </div>
  );
}
