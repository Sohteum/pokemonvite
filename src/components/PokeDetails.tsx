import { Link } from "react-router-dom";
import { IpokemonData, modalAtom } from "../atom/atom";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";


const ModalList = styled.div`
  z-index: 9999;
`;

const PokeDetails = ({
  pokemon,
}: {
  pokemon: IpokemonData | null;
}) => {
  const setModalOpen = useSetRecoilState(modalAtom);
  const fnClose = () => {
    setModalOpen(0);
  };



if(pokemon == null) return <div>pokemon정보가 없습니다</div>;


  return (
    <ModalList id="ModalList">
      <Link to="/">
        <div className="modalOpen">
          <div className="close" onClick={fnClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
          <p className="id-number">#Id: {pokemon!.id}</p>
          <img className="modal-image" src={pokemon!.image} alt={pokemon!.name} />
          <div className="infomation">
            <p className="modal-type">type: {pokemon!.type}</p>
            <p className="modal-name">name: {pokemon!.name}</p>
          </div>
        </div>
      </Link>
    </ModalList>
  );
};

export default PokeDetails;
