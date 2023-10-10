import axios from "axios";
import {   useEffect } from "react";


const PokeTypes = () => {

    // useEffect(() => {
    //     axios
    //       .get(url)
    //       .then((response) => {
    //         setPokemon({
    //           name: response.data.name,
    //           type: response.data.types[0].type.name,
    //           image: response.data.sprites.other.home.front_default,
    //           id: response.data.id,
    //           height: response.data.height,
    //           weight: response.data.weight,
    //         });
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching Pokemon details:", error);
    //         setLoading(false);
    //       });
    //   }, []);


    // const typeNameHandler =()=>{
    //     if()
    //   }

  return (
    <div className="typeInfo hover">
      {/* 18개 */}
      <div className="type-name"  >
        normal
      </div>
      <div className="type-name">fire</div>
      <div className="type-name">water</div>
      <div className="type-name">grass</div>
      <div className="type-name">electric</div>
      <div className="type-name">ice</div>
      <div className="type-name">fighting</div>
      <div className="type-name">poision</div>
      <div className="type-name">ground</div>
      <div className="type-name">flying</div>
      <div className="type-name">psychic</div>
      <div className="type-name">bug</div>
      <div className="type-name">rock</div>
      <div className="type-name">ghost</div>
      <div className="type-name">dragon</div>
      <div className="type-name">steel</div>
      <div className="type-name">fairy</div>
      <div className="type-name">dark</div>
    </div>
  );
};

export default PokeTypes;
