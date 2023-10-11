import { Link } from "react-router-dom";
import { IpokemonData, modalAtom } from "../atom/atom";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const ModalList = styled.div`
  z-index: 9999;
`;

const PokeDetails = ({ pokemon }: { pokemon: IpokemonData | null }) => {
  const setModalOpen = useSetRecoilState(modalAtom);
  const fnClose = () => {
    setModalOpen(0);
  };

  if (pokemon == null) return <div>pokemon정보가 없습니다</div>;

  return (
    <>
      <ModalList id="ModalList">
        <Link to="/">
          <div className="modalBackground">
            <div className="modalOpen">
              <div className="close" onClick={fnClose}>
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
              <div className="modal-info">
                <img className="modal-image" src={pokemon!.image} alt="" />
                <div className="infomation">
                  <p className="modal-id info" >No.{pokemon!.id}</p>
                  <p className="modal-name info">{pokemon!.name}</p>
                  <p className="modal-type info">{pokemon!.type}</p>
                  <p className="modal-height info">키: {pokemon!.height}0cm</p>
                  <p className="modal-weight info">몸무게: {pokemon!.weight}kg</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </ModalList>
    </>
  );
};

export default PokeDetails;
