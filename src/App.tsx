import { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom,  searchedPokeTermAtom } from "./atom/atom";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemonName, setSearchedPokemonName] = useRecoilState(searchedPokeTermAtom);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
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

  const searchTermHandler = (e: any) => {
    e.preventDefault()
  }

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokemon-container">
      <header>
        <h1>Pokemon Evolution</h1>
        <form onSubmit={searchTermHandler}>
          <input
            type="text"
            placeholder="name or type"
            onChange={(e) => {
              setSearchedPokemonName(e.target.value);
              {/*여기서 input에 입력하는 값을 실시간(onchange)으로 setsearchedpokemonName에 담아줌 담은걸 리스트페이지에서 불러올것임*/}
            }}
          />
          <button>검색</button>
        </form>
        <button
          className="login"
          onClick={() => {
            navi("/login");
          }}
        >
          {/* user */}
          {username ?
            <div>
              <p>{username} 님 환영합니다</p>
              <button onClick={handleLogout}>로그아웃</button>
            </div> : 'Login'}
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

//1. 인피니티 스크롤!!!!!!
//2. 모달창css, 정보 더 불러오기
//3. 검색기능 추가
//4. 로그인시 환영합니다 텍스트 넣고 로그아웃만 버튼으로 만들기
//5. preventDefault에 e.target.value등을 넣고 string값으로 바꿔보기
