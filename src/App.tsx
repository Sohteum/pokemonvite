import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokeList from "./components/PokeList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom, pokemonListAtom, searchedPokeTermAtom } from "./atom/atom";
import logo from "./assets/logo.png";
import PokeTypes from "./components/PokeTypes";

const App = () => {
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListAtom);
  const [searchedPokemonName, setSearchedPokemonName] = useRecoilState(searchedPokeTermAtom);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useRecoilState(pokeUserNameAtom);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [prevPageUrl, setPrevPageUrl] = useState('')
  const navi = useNavigate();
  const target = useRef<HTMLDivElement>(null); // 인피니티 스크롤 용도 (observer)

  useEffect(() => {
    pokemonListHandler(currentPageUrl);
  }, [currentPageUrl]);


  const pokemonListHandler = (url: string) => {
    if (url === '') return;

    axios.get(url).then((response) => {
      setPokemonList(response.data.results)
      
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setLoading(false);
      window.scrollTo(0, 0);//페이지 이동 후 최상단으로 이동
    }).catch((error) => {
      console.error("Error fetching Pokemon list:", error);
      setLoading(false);
    });
  };

  const searchTermHandler = (e: any) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    // setPrevPageUrl()//가장 최신 페이지로 이동
  };

  const pageRerender =()=>{
    navi("/") 
    window.scrollTo(0, 0);
  }

  if (loading) return <div style={{ listStyle: "none" }}>Loading...</div>;

  return (
    <>
      <div className="pokemon-container">
        <header>
          <div>
            <img
              className="hover"
              src={logo}
              alt=""
              onClick={pageRerender}
            />
            {/* <h3 className="invisible">포켓몬도감</h3> */}
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
          {/* <PokeTypes/> */}
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
        <div className="poke-container">
          <PokeTypes />
  
          <ul className="all-container">
            {pokemonList?.map((pokemon: object, index: number) => (
            
              <PokeList
                key={index}
                url={pokemon.url}
                isLast={pokemonList.length - 1 == index}
  
              />
            ))}
  
          </ul>
        </div>
      </div>
      <div className="pagingBtn">
        <button className="prevBtn hover" onClick={() => { setCurrentPageUrl(prevPageUrl ?? '') }}>Previous</button>
        <button className="nextBtn hover" onClick={() => { setCurrentPageUrl(nextPageUrl ?? '') }}>Next</button>
      </div>
      <div ref={target}></div>
    </>
  );
};

export default App;

//1. 인피니티 스크롤!!!!!!
//2. 클릭하면 타입별로 나오도록
// 왜 넥스트랑 프리비어스 클릭하면 렌더링 새로 안됨?포켓몬 로고 클릭해도 재렌더링이 안됨.
//4. 로그인시 환영합니다 텍스트 넣고 로그아웃만 버튼으로 만들기
//5. preventDefault에 e.target.value등을 넣고 string값으로 바꿔보기
//6. 전역상태관리를 남발하면 안됨. 왜? 타탕한 이유 찾아보기 남발하면 계속 전역적으로 상태가 계속 바뀌니까. 무튼 더 찾아보기
//4. 타입이 배열로 되어있으니까 맵을 돌려서 호출하기
