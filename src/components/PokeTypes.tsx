import axios from "axios";
import React, { useEffect, useState } from "react";
import { IpokemonData } from "../atom/atom";

const PokeTypes = () => {
  // const filterOptions = [
  //   { name: "normal", value: "normal" },
  //   { name: "fighting", value: "fighting" },
  //   { name: "flying", value: "flying" },
  //   { name: "poison", value: "poison" },
  //   { name: "ground", value: "ground" },
  //   { name: "rock", value: "rock" },
  //   { name: "bug", value: "bug" },
  //   { name: "ghost", value: "ghost" },
  //   { name: "steel", value: "steel" },
  //   { name: "fire", value: "fire" },
  //   { name: "water", value: "water" },
  //   { name: "grass", value: "grass" },
  //   { name: "electric", value: "electric" },
  //   { name: "psychic", value: "psychic" },
  //   { name: "ice", value: "ice" },
  //   { name: "dragon", value: "dragon" },
  //   { name: "dark", value: "dark" },
  //   { name: "fairy", value: "fairy" },
  //   { name: "unknown", value: "unknown" },
  //   { name: "shadow", value: "shadow" },
  // ];

  const [pokemon, setPokemon] = useState<IpokemonData>(); // 스테이트에서 타입설정하기 확인
  const [typeList, setTypeList] = useState<IpokemonData[]>([]);
  const [isClicked, setIsClicked] = useState();
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/type";
    axios
      .get(apiUrl)
      .then((response) => {
        setTypeList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
      });
  }, []);

  // const newFilterOptions = filterOptions.name.map((elm) => {
  //   if (elm == pokemon.type) {
  //     //해당타입포켓몬이 출력된다
  //   }
  //   return;
  // });


console.log(pokemon.type.filter((elm)=> elm.name ==='fire'));


  return (
    <ul className="typeInfo hover" style={{ listStyle: "none" }}>
      {typeList.map((list) => (
        <li key={list.name} className="type">
          {list.name}
        </li>
      ))}
    </ul>
  );
};

export default PokeTypes;
