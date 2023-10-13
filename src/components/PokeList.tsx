import { useState, useEffect } from "react";
import axios from "axios";
import PokeDetails from "./PokeDetails";
import { Link } from "react-router-dom";
import { IpokemonData, modalAtom, searchedPokeTermAtom } from "../atom/atom";
import { useRecoilState } from "recoil";

const PokeList = ({ url, isLast }: { url: string, isLast: boolean }) => {
  const [pokemon, setPokemon] = useState<IpokemonData>(); // 스테이트에서 타입설정하기 확인
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);
  const [searchedPokemonName] = useRecoilState(searchedPokeTermAtom);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokemon({
          index: response.data.index,
          name: response.data.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.other.home.front_default,
          id: response.data.id,
          height: response.data.height,
          weight: response.data.weight,
        });

        if(isLast) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching Pokemon details:", error);
        setLoading(false);
      });
  }, []);

  if (loading && isLast) return <h1>Loading...</h1>;

  if (pokemon == null) return <p className='thumb-container'>포켓몬 데이터가 없습니다</p>;
  //null값이 나올수 있기 때문에 data

  return (
    <>
      {pokemon.name.includes(searchedPokemonName) ||
      pokemon.type.includes(searchedPokemonName) ? (
        // 여기서 아까 리코일에 담은걸 리스트가 포함하고 있으면 그 값을 보여줌 아니면 빈값
        // 그럼 왜 검색어를 입력하지않았을때는 리스트를 보여주는가?
        <Link
          to={pokemon!.name}
          style={{ textDecoration: "none" }}
          onClick={() => setModalOpen(pokemon.id)}
        >
          {/* 여기서 온클릭하면 왜 모달페이지가 안열림? */}
          <li
            style={{ listStyle: "none" }}
            className="thumb-container detail-wrapper"
          >
            <div className="top-line">
              <p className="number">No.{pokemon!.id}</p>
              <p className="type" style={{ textDecoration: "none" }}>
                {pokemon!.type}
              </p>
              {/* <p className="type" >{!typeTwo ? pokemon!.typeTwo : ''}</p> */}
            </div>
            <img className="image" src={pokemon!.image} alt={pokemon!.name} />
            <div className="NameType">
              <p className="name" style={{ textDecoration: "none" }}>
                {pokemon!.name}
              </p>
            </div>
          </li>
        </Link>
      ) : (
        ""
      )}
      {modalOpen == pokemon.id && <PokeDetails pokemon={pokemon} />}
      {/* 모달을 삼항연산자에 포함시키면 모달이 리스트에 가려짐 */}
    </>
  );
};

export default PokeList;

{
  /* 여기서 맵이 돌고있어서 클릭하면 전부다 나오니까 마지막인 래티켓이 나온것.
      이걸 리코일로 false로 억제했는데 트루로 바뀌니가 다나온거 */
}
{
  /* 불리언값으로 호출했었음. 그럼 모달이 열리면 모든애들이 트루 */
}
