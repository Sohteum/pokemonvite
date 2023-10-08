import { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom } from "./atom/atom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(pokeUserNameAtom);


  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";

    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon list:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokemon-container">
      <header>
        <h1>Pokemon Evolution</h1>
        {/* <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        {pokemonList.filter(value:any) =>{
          if(searchTerm == ""){
            return value
          }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
          }
        }
        }).map(data =>{
          return <p>{pokemonList.value}</p>
        })}
      /> */}
        {/* 여기서  filter와 map사용법을 잘 모르겠다.*/}
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          {/* user */}
          {username ? username : 'Login'}
        </button>
      </header>
      <ul className="all-container">
        {pokemonList?.map((pokemon: any, index: number) => (
          <PokeList key={index} url={pokemon.url} />
        ))}
      </ul>
    </div>
  );
};

export default App;
