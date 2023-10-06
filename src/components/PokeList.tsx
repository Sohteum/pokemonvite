import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeDetails from "./PokeDetails";
import { Link } from "react-router-dom";
import { IpokemonData, IpokemonDataAtom, PokemonIdAtom, PokemonNameAtom, modalAtom, pokemonListAtom } from "../atom/atom";
import { useRecoilState, useSetRecoilState } from "recoil";




const PokeList = ({url}:{url:any}) => {

  // const [url, setUrl] = useRecoilState(pokemonListAtom);
    const [data, setData] = useRecoilState(IpokemonDataAtom); // 스테이트에서 타입설정하기 확인
  const [list, setList] = useState<IpokemonData | undefined>(); // 스테이트에서 타입설정하기 확인
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom)
  const setName = useSetRecoilState(PokemonNameAtom)


  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setList({
          name: response.data.name,
          type: response.data.types[0].type.name,
          image: response.data.sprites.front_default,
          id: response.data.id,
        });
        setLoading(false);    
      })
      .catch((error) => {
        console.error("Error fetching Pokemon details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <li>Loading...</li>;



  if (data == null) return <li>null Data...</li>;
  //null값이 나올수 있기 때문에 data


  const showModal = (e:React.MouseEvent<HTMLAnchorElement>,  id:number, image:string, type:string, name:string) => {
    setModalOpen(true)
  }
  
  
  return (
    <>
  
    <Link to={list!.name} onClick={(e)=>showModal(e, list!.id, list!.image, list!.type, list!.name) }>       
       <li className="thumb-container detail-wrapper" >
       <p className="number">#Id: {list!.id}</p>
       <img className="image" src={list!.image} alt={list!.name} />
       <p>{list!.type}</p>
       <p className="name">{list!.name}</p>
     </li>
    </Link>

    { modalOpen && (<PokeDetails id={ list!.id } image={ list!.image} type={list!.type} name={list!.name} />)}
  </>

  );
};


export default PokeList;

//1. n번째 포켓몬정보 뿌리기
