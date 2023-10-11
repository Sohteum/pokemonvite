import axios from "axios";
import React, { useEffect, useState } from "react";
import { IpokemonData } from "../atom/atom";

const PokeTypes = () => {
  const [typeList, setTypeList] = useState<IpokemonData[]>([]);
  const [type, setType] = useState({
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  });

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


  //온클릭을 했는데 그게 리스트에 있는것과 일치한다면 그 목록을 불러오기
  const typeDataHandler = () => {
    {typeList.filter(typeList) ? typeList.type : "null"}
    
  };
  console.log(typeList.type);

  return (
    <ul className="typeInfo hover" style={{ listStyle: "none" }}>
      {typeList.map((list) => (
        <li
          key={list.name}
          className='type'
          onClick={typeDataHandler}
        >
          {list.name}
        </li>
      ))}
    </ul>
  );
};

export default PokeTypes;
