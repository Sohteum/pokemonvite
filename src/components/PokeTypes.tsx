import axios from "axios";
import React, { useEffect, useState } from "react";
import { IpokemonData, pokemonListAtom } from "../atom/atom";
import { useRecoilState } from "recoil";

const PokeTypes = () => {
  // const filterOptions = [
  //   {key:'1', name: "normal", value: "normal" },
  //   {key:'2', name: "fighting", value: "fighting" },
  //   {key:'3', name: "flying", value: "flying" },
  //   {key:'4', name: "poison", value: "poison" },
  //   {key:'5', name: "ground", value: "ground" },
  //   {key:'6', name: "rock", value: "rock" },
  //   {key:'7', name: "bug", value: "bug" },
  //   {key:'8', name: "ghost", value: "ghost" },
  //   {key:'9', name: "steel", value: "steel" },
  //   {key:'10', name: "fire", value: "fire" },
  //   {key:'11', name: "water", value: "water" },
  //   {key:'12', name: "grass", value: "grass" },
  //   {key:'13', name: "electric", value: "electric" },
  //   {key:'14', name: "psychic", value: "psychic" },
  //   {key:'15', name: "ice", value: "ice" },
  //   {key:'16', name: "dragon", value: "dragon" },
  //   {key:'17', name: "dark", value: "dark" },
  //   {key:'18', name: "fairy", value: "fairy" },
  //   {key:'19', name: "unknown", value: "unknown" },
  //   {key:'20', name: "shadow", value: "shadow" },
  // ];

  const [pokemon, setPokemon] = useState<IpokemonData>(); // 스테이트에서 타입설정하기 확인
  const [typeList, setTypeList] = useState<IpokemonData[]>([]);
  const apiUrl = "https://pokeapi.co/api/v2/type";
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListAtom);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setTypeList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
      });
  }, []);


const onChangeHandler =(id: number)=>{
  axios
    .get(`${apiUrl}/${id}`)
    .then((response) => {
      const list = response.data.pokemon.map((pokemon: object) => (pokemon.pokemon));
      setPokemonList(list)     
    })
    .catch((error) => {
      console.error("Error fetching Pokemon list:", error);
    });
}

  return (
    <ul className="typeInfo hover" style={{ listStyle: "none" }}>
      {typeList.map((type, index: number) => (
        <li onClick={() => onChangeHandler(index+1)} key={type.name} className="type">
          {type.name}
        </li>
      ))}
    </ul>
    // <select onChange={onChangeHandler} value={typeList}>
		// {filterOptions.map((item, index)=>(
		// 	<option key={item.key} value={item.key}>{item.value}</option>
		// ))}
    // </select>
  );
};

export default PokeTypes;
