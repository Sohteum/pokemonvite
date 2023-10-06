import React from "react";
import { Link } from "react-router-dom";
import { IpokemonData, modalAtom } from "../atom/atom";
import styled from "styled-components";
import {  useSetRecoilState } from "recoil";


const ModalList = styled.div`
  z-index: 9999;
`;

const PokeDetails = ({
  id,
  image,
  type,
  name,
}: {
  id: number;
  image: string;
  type: string;
  name: string;
}) => {
  // const modalClose = () => {
  //   setModalOpen(false);
  // };

  const setModalOpen = useSetRecoilState(modalAtom);
  const fnClose = () => {
    setModalOpen(false);
  };

  return (
    <ModalList id="ModalList">
      <Link to="/">
        <div className="modalOpen">
          <div className="close" onClick={fnClose}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
          <p className="id-number">#Id: {id}</p>
          <img className="modal-image" src={image} alt={name} />
          <div className="infomation">
            <p className="modal-type">type: {type}</p>
            <p className="modal-name">name: {name}</p>
          </div>
        </div>
      </Link>
    </ModalList>
  );
};

export default PokeDetails;
