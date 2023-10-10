import { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom, searchedPokeTermAtom } from "./atom/atom";
import logo from "./assets/logo.png";
import PokeTypes from "./components/PokeTypes";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemonName, setSearchedPokemonName] =
    useRecoilState(searchedPokeTermAtom);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
  const [username, setUsername] = useRecoilState(pokeUserNameAtom);

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";
    // https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0
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
    e.preventDefault();
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
  };

  if (loading) return <div style={{ listStyle: "none" }}>Loading...</div>;

  return (
    <>
      <div className="pokemon-container">
        <header>
          <div>
            <img className="hover" src={logo} alt="" />
            <h3 className="invisible">포켓몬도감</h3>
          </div>
          <form onSubmit={searchTermHandler}>
            <input
              className="searchInput"
              type="text"
              placeholder="포켓몬 이름 혹은 특성을 입력해주세요"
              onChange={(e) => {
                setSearchedPokemonName(e.target.value);
                {
                  /*여기서 input에 입력하는 값을 실시간(onchange)으로 setsearchedpokemonName에 담아줌 담은걸 리스트페이지에서 불러올것임*/
                }
              }}
            />
            <div className="searchInputInBar"></div>
            <button className="searchBtn hover">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <button
            className="login hover"
            onClick={() => {
              navi("/login");
            }}
          >
            {/* user */}
            {username ? (
              <div>
                <p>{username} 님 환영합니다</p>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            ) : (
              <i className="fa-solid fa-user"></i>
            )}
          </button>
        </header>
        <PokeTypes />
        <ul className="all-container">
          {pokemonList?.map((pokemon: any, index: number) => (
            <PokeList key={index} url={pokemon.url} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

//1. 인피니티 스크롤!!!!!!
//2. 모달창css, 정보 더 불러오기
//3. 검색기능 추가
//4. 로그인시 환영합니다 텍스트 넣고 로그아웃만 버튼으로 만들기
//5. preventDefault에 e.target.value등을 넣고 string값으로 바꿔보기
//6. 전역상태관리를 남발하면 안됨. 왜? 타탕한 이유 찾아보기 남발하면 계속 전역적으로 상태가 계속 바뀌니까. 무튼 더 찾아보기
//7. 타입이 배열로 되어있으니까 맵을 돌려서 호출하기
//8. 클릭하면 타입별로 나오도록
